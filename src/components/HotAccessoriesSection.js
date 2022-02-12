import React from 'react';
import HotItemCard from './HotItemCard';
import '../styles/HotAccessoriesSection.css';

const HotAccessoriesSection = ({ music, musicCover, smartDevices, smartDevicesCover, home, homeCover, lifestyle, lifestyleCover, mobileAccessories, mobileAccessoriesCover }) => {
  const browseMore = 'https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg';
  return <div className='hotAccessoriesSection'>
    <div>
      <img src={musicCover || smartDevicesCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="Cover" />
    </div>
    <div>
      {(music && music.map((item, index) => (
        <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index} />
      )))}
      {(smartDevices && smartDevices.map((item, index) => (
        <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index} />
      )))}
      {(home && home.map((item, index) => (
        <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index} />
      )))}
      {(lifestyle && lifestyle.map((item, index) => (
        <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index} />
      )))}
      {(mobileAccessories && mobileAccessories.map((item, index) => (
        <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index} />
      )))}
      <HotItemCard key={6} name={''} price={''} image={browseMore} index={6} />
    </div>
  </div>;
};

export default HotAccessoriesSection;
