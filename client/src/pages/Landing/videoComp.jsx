import React from 'react';
import clip from '../../common-components/Assets/backgroundvideo.mp4'

const VideoComp = () => {
    return (
<video style={{width:'100%',maxHeight:'608px'}}    autoPlay loop muted >
    <source src={clip} type='video/mp4' />
  </video>
    )
  }


  export default VideoComp;