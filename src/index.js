import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Yotube from './component/apikey/youtube'

const youtube = new Yotube(process.env.REACT_APP_YOUTUBE_API_KEY);


ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);



