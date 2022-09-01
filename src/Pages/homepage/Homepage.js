import React, { useState, useEffect } from 'react';
import CarrousselDesktop from './component/carrousselDesktop/CarrousselDesktop';
import CarrousselMobile from './component/carrousselMobile/CarrousselMobile';
import './homepage.scss';

export default function Homepage({ productQuantity, setProductQuantity, setCartProductQuantity }) {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    
    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    const handleAddToCart = () => {
		setCartProductQuantity((prevState) => prevState + productQuantity);
		setProductQuantity(0);
	};



    return (
        <div className="homepage-container">
            <div className="image-container">
                { matches ? <CarrousselDesktop/> : <CarrousselMobile/> }
            </div>
            <div className="text-container">
                <h5>SNEAKER COMPANY</h5>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className="price-container">
                    <div className="price-container__price">$125.00</div>
                    <div className="price-container__reduc">50%</div>
                </div>
                <div className="initial-price">$250.00</div>
                <div className="command-container">
                    <div className="command-container__quantity">
                        <img 
                            className="minus" 
                            src="/img/icon-minus.svg" 
                            alt="" 
                            onClick={() =>
									setProductQuantity((prevState) => (prevState !== 0 ? prevState - 1 : 0))
								}
                        />
                        {productQuantity}
                        <img 
                            className="plus"   
                            src="/img/icon-plus.svg" 
                            alt="" 
                            onClick={() => setProductQuantity((prevState) => prevState + 1)}
                            />
                    </div>
                    <button className="command-container__command" onClick={handleAddToCart}>
                        <img src="/img/icon-cart-2.svg" alt="" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
