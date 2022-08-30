import React from 'react';
import "./toogleCart.scss";

export default function ToogleCart({ setOpenCart, cartProductQuantity, setCartProductQuantity }) {
    return (
        <div className="cart">
            <div className="cart__heading">
                <h3>Cart</h3>
            </div>
            <div className="cart__item">
                <p>Your cart is empty !</p>
            </div>
        </div>
    )
}
