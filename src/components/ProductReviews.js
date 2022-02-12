import React from 'react';
import Heading from './Heading';
import ProductReviewCard from './ProductReviewCard';
import '../styles/ProductReviews.css';

const ProductReviews = ({productReviews}) => {
  return (
    <>
        <Heading text={'PRODUCT REVIEWS'} />
        <div className='productReviews'>
            {productReviews.map((item, index) => (
                <ProductReviewCard key={index} image={item.image} price={item.price} name={item.name} review={item.review} index={index} />
            ))}
        </div>
    </>
  )
}

export default ProductReviews