import React from 'react';
import Video_item from '../video_item/video_item';
import styles from '../video_list/video_list.module.css';

const Video_list = ({videos,onclickvideo,display}) => {
  const modecss = display == 'list'? styles.list:styles.view;
  return(
    <ul className={modecss} key="list">
    {videos.map(video => (
      <Video_item  key={video.id} video={video} onclickvideo={onclickvideo} mode={display}/>
    ))}
  </ul>
)};



export default Video_list;