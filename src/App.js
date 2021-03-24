import React, { useEffect, useState } from 'react';
import Login from './login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './player/Player';
import { useDataLayerValue } from './data/DataLayer';
import './App.css';

// super object
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
     const hash = getTokenFromUrl();
     window.location.hash = "";
     
     const _token = hash.access_token;
     console.log('TOKEN>>> ', _token);

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {        
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcFnPhiuKqKq9").then((playlist)=>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY", 
          discover_weekly: playlist,
        });
      });
    }
  }, []);

  // console.log('👨‍🎓', user);

  return (
    <div className="app">     
      {token ? <Player spotify={spotify}/> : <Login />}
    </div>
  );
};

export default App;


