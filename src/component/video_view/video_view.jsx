import React from 'react';

const Video_view = ({video,list,video:{snippet}}) => (
    <>
    <iframe 
    type="text/html"
    width="100%" 
    height="600"
    src={`https://www.youtube.com/embed/${video.id}`}
    frameBorder="0" 
    allowFullScreen></iframe>
    <a href="#" onClick={()=>{list(null)}}>목록보기</a>
    <h1>{snippet.title}</h1>
    <h5>{snippet.channelTitle}</h5>
    <h5>{snippet.publishedAt}</h5>
    <h5>{snippet.description}</h5>
    </>
    
);

export default Video_view;