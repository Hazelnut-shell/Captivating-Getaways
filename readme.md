This is the frontend for the Captivating Getaways app, which is a React SPA. The app is designed for users to share fun, captivating and all places which they think are worth visiting. 

The frontend is statically hosted by Firebase. You can visit it on https://capitivating-getaways.web.app/. Since the hosting and data services used by this app are basically free tier, please note the app may be slow or inactive.

The app supports CRUD operations on user and place data. It also supports user authentication with JWT, authorization, and file uploads. It uses Google API to display the location of a place on Google Maps.

All the components in this React app are function components rather than class components.  Built-in hooks such as useState, useContext, useRef, useEffect, useCallback, etc. are used, and some common logic is also extracted into custom hooks like form hook, http hook, and auth hook.

P.S. Render, where the backend is hosted, doesn't provide free disk storage. Therefore, the images uploaded by users cannot be stored on backend or be retrieved later. That's the reason why the images cannot load on the frontend. However, the file uploads do work when the backend is hosted locally in which case images can be stored on the local machine. 