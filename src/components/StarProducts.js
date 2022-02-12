import React from 'react';
import Heading from './Heading';
import '../styles/StarProducts.css';

const StarProducts = ({ starProducts }) => {
    return <>
        <Heading text={'STAR PRODUCTS'} />
        <div className='starProducts'>
            <div>
                <a href={starProducts[0].url}>
                    <img src={starProducts[0].image} alt="1st Product" />
                </a>
            </div>
            <div>
            <div>
                <a href={starProducts[1].url}>
                    <img src={starProducts[1].image} alt="2nd Product" />
                </a>
                <a href={starProducts[2].url}>
                    <img src={starProducts[2].image} alt="3rd Product" />
                </a>
                
            </div>
            <div>
                <a href={starProducts[3].url}>
                    <img src={starProducts[3].image} alt="4th Product" />
                </a>
            </div>
            </div>
        </div>
    </>;
};

export default StarProducts;
