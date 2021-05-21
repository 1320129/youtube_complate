import React, { useEffect, useState } from 'react';
import './App.css';
import Video_list from './component/video_list/video_list';
import SearchHeader from './component/search_header/search_header'

function App() {
  const [videos,setVideos] = useState([]);

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyAj36izoMK59dirlM0vtK7WcA18cM4BHcc`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }

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
  return (
    <>
      <SearchHeader onsearch={search}/>
      <Video_list videos={videos} />
    </>
  )
}

export default App;
