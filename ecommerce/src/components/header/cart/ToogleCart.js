import React, { useRef } from 'react';
import productImage from '../../../assets/images/image-product-1-thumbnail.jpg';
import { useOnClickOutside } from '../../../hooks/useOnCLickOutside';
import "./toogleCart.scss";

export default function ToogleCart({ toggleCart, cartProductQuantity, setCartProductQuantity }) {

    const ref = useRef();

    useOnClickOutside(ref, () => toggleCart(false));

    return (
            <div className="cart" ref={ref}>
                <div className="cart__heading">
                    <h3>Cart</h3>
                </div>
        { cartProductQuantity === 0 ? (
            <div className="cart__item">
                <p>Your cart is empty !</p>
            </div>
        ) : (
            <div>
                <div className="cart__item">
                    <div className="cart__item__img">
                        <img src={productImage} alt="product" />
                    </div>
                    <div className="cart__item__info">
                        <p className="cart__item__info__name">Fall Limited Edition Sneakers</p>
                        <p className="cart__item__info__price">$125.00 X {cartProductQuantity}</p>
                        <p>${125 * cartProductQuantity}.00</p>
                    </div>
                    <div className="cart__item__delete">
                        <img src="/img/icon-delete.svg" alt="" onClick={
                            () => setCartProductQuantity(0)
                        }/>
                    </div>
                </div>
                <div className="cart__button">
                    <button className="cart__button__checkout">Checkout</button>
                </div>
            </div>
            
        )
        }
        </div>
    )
}
