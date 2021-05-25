import React, { useEffect, useState } from 'react';
import './App.css';
import Video_list from './component/video_list/video_list';
import SearchHeader from './component/search_header/search_header'

function App({youtube}) {
  const [videos,setVideos] = useState([]);

  const search = query => {
    youtube.search(query)//
    .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostpopula()//
    .then(videos => setVideos(videos));
  }, []);
  return (
    <>
      <SearchHeader onsearch={search}/>
      <Video_list videos={videos} />
    </>
  )
}

export default App;
