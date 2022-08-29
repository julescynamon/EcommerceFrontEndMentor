import React, { useState } from "react";
import "./lightbox.scss";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

export default function Lightbox({setLightbox}) {
    const [imgClick, setImgClick] = useState("/img/image-product-1.jpg");
    const [ imgActive, setImgActive ] = useState(0);
	const [slideAnim, setSlideAnim] = useState({
		index: 1,
		inProgress: false,
	});

	const nextSlide = () => {
		if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
			setSlideAnim({ index: slideAnim.index + 1, inProgress: true });
			setTimeout(() => {
				setSlideAnim({ index: slideAnim.index + 1, inProgress: false });
			}, 400);
		} else if (
			slideAnim.index === dataSlider.length &&
			!slideAnim.inProgress
		) {
			setSlideAnim({ index: 1, inProgress: true });
			setTimeout(() => {
				setSlideAnim({ index: 1, inProgress: false });
			}, 400);
		}
	};
	const prevSlide = () => {
		if (slideAnim.index !== 1 && !slideAnim.inProgress) {
			setSlideAnim({
				index: slideAnim.index - 1,
				inProgress: true,
			});
			setTimeout(() => {
				setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
			}, 400);
		} else if (slideAnim.index === 1 && !slideAnim.inProgress) {
			setSlideAnim({ index: 5, inProgress: true });
			setTimeout(() => {
				setSlideAnim({ index: 5, inProgress: false });
			}, 400);
		}
	};


	return (
        <div className="lightbox">
		<div className='container-slider'>
            <svg 
                onClick={() => setLightbox(false)}
                width="14" 
                height="15" 
                xmlns="http://www.w3.org/2000/svg"
                ><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/>
            </svg>
                <div className='slider'>
                    {dataSlider.map((obj, index) => {
                        return (
                            <div
                                key={obj.id}
                                className={
                                    slideAnim.index === index + 1
                                        ? "slide active-anim"
                                        : "slide"
                                }
                            >
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/img/img-product-${index + 1}.jpg` && imgClick
                                    }
                                    alt='picActive'
                                />
                            </div>
                        );
                    })}
                <BtnSlider moveSlide={nextSlide} direction='next' />
                <BtnSlider moveSlide={prevSlide} direction='prev' />
                <div className="img-thumbnail">
                    <img id='img1' className={imgActive === 0 ? 'active' : 'img1'} onClick={ () => {
                        setImgActive(0);
                        setImgClick("/img/image-product-1.jpg");
                    } } src="/img/image-product-1-thumbnail.jpg" alt="" />
                    <img id='img2' className={imgActive === 1 ? 'active' : 'img2'}  onClick={ () => {
                        setImgActive(1);
                        setImgClick("/img/image-product-2.jpg");
                    } } src="/img/image-product-2-thumbnail.jpg" alt="" />
                    <img id='img3' className={imgActive === 2 ? 'active' : 'img3'} onClick={ () => {
                        setImgActive(2);
                        setImgClick("/img/image-product-3.jpg");
                    } } src="/img/image-product-3-thumbnail.jpg" alt="" />
                    <img id='img4' className={imgActive === 3 ? 'active' : 'img4'} onClick={ () => {
                        setImgActive(3);
                        setImgClick("/img/image-product-4.jpg");
                    } } src="/img/image-product-4-thumbnail.jpg" alt="" />
                </div>
            </div>
		</div>
        </div>
	);
}