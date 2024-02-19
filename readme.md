# Overview and deployment
This is the frontend for the Captivating Getaways app, which is a React SPA with Tailwind CSS. The app is designed for users to share fun, captivating and all places which they think are worth visiting. 

The frontend is statically hosted on Firebase. You can visit it on https://capitivating-getaways.web.app/. Since the hosting services used by this app are basically free tier, the backend on Render will sleep after 15 minutes of inactivity. So <ins> please expect to wait a few seconds</ins> for the backend to be back up and running when you first access the app : )

# App features and implementation
The app supports CRUD operations on user and place data. It also supports user authentication with JWT, authorization, and file uploads. It uses Google API to display the location of a place on Google Maps.

You can use the sample user "carol@gmail.com" and password "123456" to log in. Logged-in users can add and edit places created by themselves, while unauthenticated users can only view places.

All the components in this React app are function components rather than class components. Built-in hooks such as useState, useContext, useRef, useEffect, useCallback, etc. are used, and some common logic is also extracted into custom hooks like form hook, http hook, and auth hook.

# Branch specification
- main branch:
uses tranditional CSS, and react router v5.

- latest branch (default branch): latest version of the app. It uses Tailwind CSS, and react router v6, and includes some other minor changes (such as provide fallback images ). Future changes will also be made to this branch. 

# Additional notes
P.S. The image uploads work normally when the backend is hosted locally, in which case images are be stored on the local machine. However, in production, the backend is hosted on the Render platform, which doesn't provide free disk storage. Therefore, images uploaded by users cannot be stored on backend or be retrieved later. To temporarily deal with this problem, I statically provide a fallback place image and user avatar image on frontend.
