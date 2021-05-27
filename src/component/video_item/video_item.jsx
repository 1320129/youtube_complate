import React from 'react';
import styles from '../video_item/video_item.module.css';

const Video_item = ({video,video:{snippet},onclickvideo,mode}) => {
    const modecss = mode == 'view'?styles.view:styles.list;
    
    return(<li className={`${styles.item} ${modecss}`} onClick={() => onclickvideo(video)}>
    <img src={snippet.thumbnails.medium.url} className={styles.item_img}/>
    <div className={styles.text_wrap}>
        <h4>{snippet.title}</h4>
        <span className={styles.item_dec}>{snippet.description}</span>
    </div>
</li>
)};

export default Video_item;