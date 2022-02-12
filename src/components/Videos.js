import React from 'react';
import Heading from './Heading';
import VideoCard from './VideoCard';
import '../styles/Videos.css';

const Videos = ({videos}) => {
  return (
    <>
        <Heading text={'VIDEOS'} />
        <div className='videos'>
            {videos.map((item, index) => (
                <VideoCard key={index} image={item.image} name={item.name} index={index} />
            ))}
        </div>
    </>
  )
}

export default Videos