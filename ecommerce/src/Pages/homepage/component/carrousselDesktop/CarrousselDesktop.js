import React, { useState } from 'react';
import './carrousselDesktop.scss';

export default function CarrousselDesktop() {
    const [imgClick, setImgClick] = useState("/img/image-product-1.jpg");

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };

    return (
        <>
            <div className="image">
                <img src={ imgClick } alt="" />
            </div>
            <div className="all-image">
                <img className={isActive ? 'actuive' : ''} onClick={ () => {
                    setImgClick("/img/image-product-1.jpg")
                    handleClick();
                } } src="/img/image-product-1-thumbnail.jpg" alt="" />
                <img onClick={ () => {
                    setImgClick("/img/image-product-2.jpg")
                } } src="/img/image-product-2-thumbnail.jpg" alt="" />
                <img onClick={ () => {
                    setImgClick("/img/image-product-3.jpg")
                } } src="/img/image-product-3-thumbnail.jpg" alt="" />
                <img onClick={ () => {
                    setImgClick("/img/image-product-4.jpg")
                } } src="/img/image-product-4-thumbnail.jpg" alt="" />
            </div>
        </>
    )
}
