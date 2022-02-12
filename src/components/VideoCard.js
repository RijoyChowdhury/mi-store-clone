import React from 'react';
import { playButton } from '../data/static';
import '../styles/VideoCard.css';

const VideoCard = ({index, image, name}) => {
  return (
    <div className='videoCard' style={{backgroundImage: `url(${image})`}}>
        <a href="#/">{playButton}</a>
        <p>{name}</p>
    </div>
  )
}

export default VideoCard