import React, { useEffect, useState } from 'react';
import './App.css';
import Video_list from './component/video_list/video_list';

function App() {
  const [videos,setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAj36izoMK59dirlM0vtK7WcA18cM4BHcc&key=AIzaSyAj36izoMK59dirlM0vtK7WcA18cM4BHcc", 
    requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return <Video_list videos={videos} />;
}

export default App;
