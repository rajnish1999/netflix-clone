# Netflix_Clone

## Description 
It is a replica of netflix website.

## Live Demo
[Click here to open the live demo](https://netflix-clone-eb74f.web.app/)

## Key features
- **Landing page:** Here user will get an option to either register or signIn.
![LandingPage](https://github.com/rajnish1999/netflix-clone/blob/master/public/Snapshots_Github/Landing_page.jpeg)
<br><br>

- **Homepage:** Here user can see all the content provided by the netflix-clone in an organized and categorized form.
![homepage](https://github.com/rajnish1999/netflix-clone/blob/master/public/Snapshots_Github/Homepage1.jpeg)
<br><br>
![homepage](https://github.com/rajnish1999/netflix-clone/blob/master/public/Snapshots_Github/Homepage2.jpeg)
<br><br>

- **SignIn page:** Here user can register as well signIn.
![signIn](https://github.com/rajnish1999/netflix-clone/blob/master/public/Snapshots_Github/signIn.jpeg)
<br><br>

## Usage
1. Fork the repo and then clone it or download it.
2. First install all dependencies:
```bash
    # with npm
    npm install
    
    # or with yarn
    yarn
 ```
3. Open firebase and configure it for setting up authentication and database(cloud firestore).

4. Create a `.env` file and insert the following code. Replace values with yours!!

```javascript
REACT_APP_API_KEY = API_KEY
REACT_APP_AUTH_DOMAIN = AUTH_DOMAIN
REACT_APP_PROJECT_ID = PROJECT_ID
REACT_APP_STORAGE_BUCKET = STORAGE_BUCKET
REACT_APP_MESSAGE_SENDERID = MESSAGE_SENDERID
REACT_APP_APP_ID = APP_ID 
REACT_APP_MEASUREMENT_ID = MEASUREMENT_ID
REACT_APP_API_KEY_TMDB = API_KEY_TMDB
```
5. Start the server
```javascript
npm start [OR] yarn start
```
6. Now run the app
  ```javacript
  localhost:[PORT] (PORT=defined in .env)
  ```

## Libraries used
- React.js
- Firebase(for authentication, storage and deployment)
- TMDB API's(for accessing movies and web shows)

# Contribute
Show your support by 🌟 the project!!



