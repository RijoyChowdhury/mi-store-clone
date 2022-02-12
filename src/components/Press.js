import React from 'react';
import Heading from './Heading';
import Banner from './Banner';
import data from '../data/data';

const Press = () => {
  return (
    <>
    <Heading text={'IN THE PRESS'} />
    <Banner banner={data.banner} />
    </>
  )
}

export default Press