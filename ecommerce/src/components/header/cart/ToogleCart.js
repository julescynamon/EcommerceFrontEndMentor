import React from 'react'

export default function ToogleCart({ setOpenCart, cartProductQuantity, setCartProductQuantity }) {
    return (
        <div className="cart">
            <div className="cart__heading">
                <h3>Cart</h3>
            </div>
            <div className="cart-item">
                <p>Your cart is empty !</p>
            </div>
        </div>
    )
}
