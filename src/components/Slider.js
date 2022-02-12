import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Slider.css'

const Slider = ({ start }) => {
    return (
        <Carousel fade>
            {start.map((item, index) => (
                <Carousel.Item key={index}>
                    <img src={item} className='d-block w-100' alt="First Slide" />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Slider;
