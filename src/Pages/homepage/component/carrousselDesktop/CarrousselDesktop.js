import React, { useState } from 'react';
import { images } from '../../../../data/images';
import Lightbox from '../lightbox/Lightbox';
import './carrousselDesktop.scss';

export default function CarrousselDesktop() {
    const [currentProductImage, setCurrentProductImage] = useState(0);
    const [lightbox, setLightbox] = useState(false);


    return (
        <>
            <div className="image">
                <img src={images[currentProductImage].png} alt="current-product" onClick={() => window.innerWidth > 980 && setLightbox(true)}/>
            </div>
            <div className="all-image">
                <img className={currentProductImage === 0 ? 'active' : ''} onClick={() => setCurrentProductImage(0)} src={images[0].thumbnail} alt="thumbnail-product" />
                <img className={currentProductImage === 1 ? 'active' : ''}  onClick={() => setCurrentProductImage(1)} src={images[1].thumbnail} alt="thumbnail-product" />
                <img className={currentProductImage === 2 ? 'active' : ''} onClick={() => setCurrentProductImage(2)} src={images[2].thumbnail} alt="thumbnail-product" />
                <img className={currentProductImage === 3 ? 'active' : ''} onClick={() => setCurrentProductImage(3)} src={images[3].thumbnail} alt="thumbnail-product" />
            </div>
            {lightbox && <Lightbox images={images} setLightbox={setLightbox} />}
        </>
    )
}
