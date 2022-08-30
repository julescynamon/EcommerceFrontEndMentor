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
                <div className="item-full">
                    <div className="item-img">
                        <img src={productImage} alt="product" />
                    </div>
                    <div className="item-info">
                        <p className="item-info__name">Fall Limited Edition Sneakers</p>
                        <p className="item-info__price">$125.00 X {cartProductQuantity}</p>
                        <p className="item-info__total">${125 * cartProductQuantity}.00</p>
                    </div>
                    <div className="item-delete">
                        <img src="/img/icon-delete.svg" alt="" onClick={
                            () => setCartProductQuantity(0)
                        }/>
                    </div>
                </div>
                    <button className="button-check">Checkout</button>
            </div>
        )
        }
        </div>
    )
}
