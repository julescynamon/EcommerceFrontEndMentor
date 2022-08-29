import React, { useState } from 'react';
import Lightbox from '../lightbox/Lightbox';
import './carrousselDesktop.scss';

export default function CarrousselDesktop() {
    const [imgClick, setImgClick] = useState("/img/image-product-1.jpg");
    const [ imgActive, setImgActive ] = useState(0);
    const [lightbox, setLightbox] = useState(false);


    return (
        <>
            <div className="image">
                <img src={ imgClick } alt="current-product" onClick={() => window.innerWidth > 768 && setLightbox(true)}/>
            </div>
            <div className="all-image">
                <img id='img1' className={imgActive === 0 ? 'active' : 'img1'} onClick={ () => {
                    setImgActive(0);
                    setImgClick("/img/image-product-1.jpg");
                } } src="/img/image-product-1-thumbnail.jpg" alt="thumbnail-product" />
                <img id='img2' className={imgActive === 1 ? 'active' : 'img2'}  onClick={ () => {
                    setImgActive(1);
                    setImgClick("/img/image-product-2.jpg");
                } } src="/img/image-product-2-thumbnail.jpg" alt="thumbnail-product" />
                <img id='img3' className={imgActive === 2 ? 'active' : 'img3'} onClick={ () => {
                    setImgActive(2);
                    setImgClick("/img/image-product-3.jpg");
                } } src="/img/image-product-3-thumbnail.jpg" alt="thumbnail-product" />
                <img id='img4' className={imgActive === 3 ? 'active' : 'img4'} onClick={ () => {
                    setImgActive(3);
                    setImgClick("/img/image-product-4.jpg");
                } } src="/img/image-product-4-thumbnail.jpg" alt="thumbnail-product" />
            </div>
            {lightbox && <Lightbox setLightbox={setLightbox} />}
        </>
    )
}
