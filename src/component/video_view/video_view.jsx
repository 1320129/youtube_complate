import React from 'react';

const Video_view = ({video,list}) => (
    <>
    <h1>{video.snippet.title}</h1>
    <iframe 
    type="text/html"
    width="100%" 
    height="405"
    src={`https://www.youtube.com/embed/${video.id}`}
    frameborder="0" 
    allowfullscreen></iframe>
    <a href="#" onClick={()=>{list(null)}}>목록보기</a>
    </>
    
);

export default Video_view;