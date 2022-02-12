import React from 'react';
import '../styles/ProductReviewCard.css';

const ProductReviewCard = ({image, name, review, price, index}) => {
  return (
    <div className='productReviewCard'>
        <img src={image} alt={`${index} card`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard