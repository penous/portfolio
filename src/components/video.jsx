import React from 'react';

const Video = ({ source }) => {
  return (
    <video playsInline='true' autoPlay='true' loop='true' muted>
      <source src={source} type='video/mp4' />
    </video>
  );
};

export default Video;
