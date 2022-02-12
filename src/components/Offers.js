import React from 'react';
import Offer from './Offer';
import '../styles/Offers.css';

const Offers = ({ offers }) => {
    return <div className="offersSection">
        {offers.map((offer, index) => (
            <Offer key={index} index={index} src={offer.image} link={offer.url} />
        ))}
    </div>;
};

export default Offers;
