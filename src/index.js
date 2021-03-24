import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { DataLayer } from './data/DataLayer';
import reducer, { initialState } from './data/reducer';

ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App /> 
  </DataLayer>,
  document.getElementById('root')
);


// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// for those having trouble with INVALID_CLIENT: Invalid redirect URI error, go to spotify developer dashboard... edit settings ... add your firebase deployed site to the redirect url, your welcome ;)s