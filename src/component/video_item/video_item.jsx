import React, { memo } from 'react';
import styles from '../video_item/video_item.module.css';

const Video_item = memo(({video,video:{snippet},onclickvideo,mode}) => {
        const modecss = mode == 'view'?styles.view:styles.list;
        
        return(
        <div className={styles.list_wrap}>
            <li className={`${styles.item} ${modecss}`} onClick={() => onclickvideo(video)}>
                <img src={snippet.thumbnails.medium.url} className={styles.item_img}/>
                <div className={styles.text_wrap}>
                    <h4>{snippet.title}</h4>
                    <span className={styles.item_dec}>{snippet.description}</span>
                </div>
            </li>
        </div>
    )}
);

export default Video_item;