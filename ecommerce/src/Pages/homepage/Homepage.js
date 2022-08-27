import React from 'react';
import './homepage.scss';

export default function Homepage() {
    return (
        <div className="homepage-container">
            <div className="image-container">
                <div className="image">
                    <img src="/img/image-product-1.jpg" alt="" />
                </div>
                <div className="all-image">
                    <img src="/img/image-product-1-thumbnail.jpg" alt="" />
                    <img src="/img/image-product-2-thumbnail.jpg" alt="" />
                    <img src="/img/image-product-3-thumbnail.jpg" alt="" />
                </div>
            </div>
            <div className="text-container">
                <h5>SNEAKER COMPANY</h5>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div>
                    <div>$125.00</div>
                    <div>50%</div>
                </div>
                <div>$250.00</div>
                <div>0</div>
                <button>Add to cart</button>
            </div>
        </div>
    )
}
