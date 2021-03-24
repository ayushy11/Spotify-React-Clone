## Spotify React Clone

This app is a demo replica of Spotify (using their spotify api) that I built in order to learn ReactJS.

Hosting URL: https://spotify-clone-1be20.web.app
## Project Screen Shot(s)

### Login Page

![alt text](https://github.com/fvukojevic/Spotify-React-Clone/blob/master/blob/login.png)

### Main Page

![alt text](https://github.com/fvukojevic/Spotify-React-Clone/blob/master/blob/body.png)
![alt text](https://github.com/fvukojevic/Spotify-React-Clone/blob/master/blob/body.png)

## Installation and Setup Instructions

#### Example:  

Before the react installation process, place visit spotify developer page and go inside the dashboard. There you can create a new app, and you will get your clientId. Also open the app inside the dashboard and edit settings. Only thing you need to change is redirect url. It is the url your app is running at. By default localhost runs at http://localhost:3000/ so you can use that if you are just looking to test the app. 

Copy your clientId inside `spotify.js` file and also put your `redirectUrl`

Now for the regular react app process you will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`    

To Start Server:

`npm run build && npm start`  

To Visit App:

`localhost:3000`  

## How does it work

Once the app is started and you have successfully added your clientId and redirectUrl, on start you should see the login page. That's because you haven't got the authorization token from spotify api. Once you click login, spotify takes it from there and asks you to login to you account. You get redirected back with the token I store inside React Context state. With that token I can reach inside spotify api and get your playlists. 

**Important Notice** -> You cannot play the songs from this web application. Spotify Api doesn't allow it. :) 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

