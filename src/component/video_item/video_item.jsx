import React from 'react';
import styles from '../video_item/video_item.module.css'
const Video_item = (props) => (
<li className={styles.item}>
    <img src={props.video.snippet.thumbnails.medium.url} className={styles.item_img}/>
    <div className={styles.text_wrap}>
        <h4>{props.video.snippet.title}</h4>
        <span className={styles.item_dec}>{props.video.snippet.description}</span>
    </div>
</li>
);

export default Video_item;