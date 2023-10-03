import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);

    // existing expirationDate means auto login
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);   // miliseconds
    setTokenExpirationDate(tokenExpirationDate);

    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString()   // Date -> ISO string
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('userData');
  }, []);

  // set timer to log out
  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      // log out
      // if the timer isn't cleared, we may have multiple times, causing problems during future logging in
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  // when the app starts, execute only once
  useEffect(() => {
    // json -> js object
    const storedData = JSON.parse(localStorage.getItem('userData'));

    // need to check if the token expires in spite of existing timer, 'cause the token may expire when the app is not running so our timer cannot work
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      // auto login does not reset timer
      login(storedData.userId, storedData.token, new Date(storedData.expiration));   // ISO string -> Date 
    }
  }, [login]);

  return { token, login, logout, userId };
};