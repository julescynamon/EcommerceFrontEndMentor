import React, { useState } from 'react';
import CarrousselDesktop from './component/CarrousselDesktop';
import './homepage.scss';

export default function Homepage() {





    return (
        <div className="homepage-container">
            <div className="image-container">
                <CarrousselDesktop/>
            </div>
            <div className="text-container">
                <h5>SNEAKER COMPANY</h5>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className="price-container">
                    <div className="price">$125.00</div>
                    <div className="reduc">50%</div>
                </div>
                <div className="initial-price">$250.00</div>
                <div className="command-container">
                    <div className="quantity">0</div>
                    <button className="command">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
