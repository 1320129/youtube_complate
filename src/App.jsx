import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Video_list from './component/video_list/video_list';
import SearchHeader from './component/search_header/search_header';
import Video_view from './component/video_view/video_view';

function App({youtube}) {
  const [videos,setVideos] = useState([]);
  const [selectvideo,selectedvideos] = useState(null);

  const clickhandle = (video) => {
    selectedvideos(video);
  }

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
      <section className={styles.container}>
        {selectvideo &&
        <div className={styles.view}>
        <Video_view video={selectvideo} list={clickhandle}/>
        </div>
        }
        <div className={styles.list}>
        <Video_list videos={videos} onclickvideo={clickhandle} display={selectvideo? 'view':'list'}/>
        </div>
      </section>
    </>
  )
}

export default App;
