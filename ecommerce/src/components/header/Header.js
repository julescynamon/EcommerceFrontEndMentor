import React,{ useState } from 'react';
import ToogleCart from './cart/ToogleCart';
import "./header.scss";

export default function Header( ) {

    const [isOpen, setIsOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    }

    const toggleCart = () => {
        setOpenCart(!openCart);
    }

    return (
        <div className="header-container">  
            <nav className="navbar">
                <button className="navbar__burger" onClick={ toggleMenu }>
                    <img src={ isOpen ? "/img/icon-close.svg" : "/img/icon-menu.svg"} alt="" />
                </button>
                <div className="logo">
                    SNEAKERS
                </div>
                <ul className={`navbar__link ${isOpen ? "show-nav" : "hide-nav"}`}>
                    <li className="navbar__item">Collections</li>
                    <li className="navbar__item">Men</li>
                    <li className="navbar__item">Women</li>
                    <li className="navbar__item">About</li>
                    <li className="navbar__item">Contact</li>
                </ul>
            </nav>
            <div className="navbar__cart">
                <img src="img/icon-cart.svg" alt="panier" onClick={ toggleCart }/>
                <span className="quantity">0</span>
            </div>
            <div className="navbar__avatar">
                <img src="img/image-avatar.png" alt="avatar" />
            </div>
            {openCart && (
					<ToogleCart
						toggleCart={toggleCart}
					/>
				)}
        </div>
    )
}
