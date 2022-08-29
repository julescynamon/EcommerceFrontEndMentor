import React from "react";
import leftArrow from "./icons/icon-previous.svg";
import rightArrow from "./icons/icon-next.svg";

export default function BtnSlider({ direction, moveSlide }) {
	return (
		<button
			onClick={moveSlide}
			className={
				direction === "next" ? "btn-slide next" : "btn-slide prev"
			}
		>
			<img src={direction === "next" ? rightArrow : leftArrow} alt='icon flèche' />
		</button>
	);
}