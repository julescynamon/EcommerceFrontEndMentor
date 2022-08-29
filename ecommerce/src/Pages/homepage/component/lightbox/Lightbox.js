import React, { useRef, useState } from "react";
import { useOnClickOutside } from '../../../../hooks/useOnCLickOutside';
import "./lightbox.scss";
import BtnSlider from "./BtnSlider";

export default function Lightbox({images, setLightbox}) {
    const [currentProductImage, setCurrentProductImage] = useState(0);
    const ref = useRef();


    useOnClickOutside(ref, () => setLightbox(false));


	const nextSlide = () => {
		setCurrentProductImage((prevState) => prevState === images.length - 1 ? 0 : prevState + 1)
	};
	const prevSlide = () => {
		setCurrentProductImage((prevState) => prevState === 0 ? images.length - 1 : prevState - 1)
	};


	return (
        <div className="lightbox">
		<div className='container-slider' ref={ref}>
            <svg 
                onClick={() => setLightbox(false)}
                width="14" 
                height="15" 
                xmlns="http://www.w3.org/2000/svg"
                ><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#fff" fill-rule="evenodd"/>
            </svg>
                <div className='slider'>
                    <div className={
                            images[currentProductImage].png
                                ? "slide active-anim"
                                : "slide"
                        }>
                    <img
                        src={images[currentProductImage].png}
                        alt='picActive'
                    />
                    </div>
                <BtnSlider moveSlide={nextSlide} direction='next' />
                <BtnSlider moveSlide={prevSlide} direction='prev' />
            </div>
		</div>
                <div className="img-thumbnail">
                <img className={currentProductImage === 0 ? 'active' : ''} onClick={() => setCurrentProductImage(0)} src={images[0].thumbnail} alt="thumbnail-product" />
                <img className={currentProductImage === 1 ? 'active' : ''}  onClick={() => setCurrentProductImage(1)} src={images[1].thumbnail} alt="thumbnail-product" />
                <img className={currentProductImage === 2 ? 'active' : ''} onClick={() => setCurrentProductImage(2)} src={images[2].thumbnail} alt="thumbnail-product" />
                <img className={currentProductImage === 3 ? 'active' : ''} onClick={() => setCurrentProductImage(3)} src={images[3].thumbnail} alt="thumbnail-product" />
                </div>
        </div>
	);
}


