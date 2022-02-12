import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Heading from './Heading';
import HotAccessoriesSection from './HotAccessoriesSection';
import '../styles/HotAccessories.css';
import data from '../data/data';

const HotAccessories = () => {
    return <>
        <Heading text={'HOT ACCESSORIES'} />
        <div className='hotAccessoriesMenu'>
            <Link className='hotAccessoriesLink' to="/music">Music Store</Link>
            <Link className='hotAccessoriesLink' to="/smartDevices">Smart Devices</Link>
            <Link className='hotAccessoriesLink' to="/home">Music StoreHome</Link>
            <Link className='hotAccessoriesLink' to="/lifestyle">Lifestyle</Link>
            <Link className='hotAccessoriesLink' to="/mobileAccessories">Mobile Accessories</Link>
        </div>
        <Routes>
            <Route exact path="/music" element={<HotAccessoriesSection music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
            <Route exact path="/smartDevices" element={<HotAccessoriesSection smartDevices={data.hotAccessories.smartDevice} smartDevicesCover={data.hotAccessoriesCover.smartDevice} />} />
            <Route exact path="/home" element={<HotAccessoriesSection home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
            <Route exact path="/lifestyle" element={<HotAccessoriesSection lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} />
            <Route exact path="/mobileAccessories" element={<HotAccessoriesSection mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
        </Routes>
    </>;
};

export default HotAccessories;
