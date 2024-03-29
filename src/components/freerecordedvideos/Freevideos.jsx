import React from 'react';
import freevideodata from '../../assets/freevideodata.js';

const FreeVideos = () => {
  return (
    <div>
      <h2>Free Recorded Videos</h2>
      <div className='videos'>
        {freevideodata.map(({ id, video, thumbnail }) => (
          <div key={id}>
            {/* 
              Use controls to display video controls 
              Add the poster attribute with the URL of the thumbnail
            */}
            <video src={video} controls poster={thumbnail}></video> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeVideos;
