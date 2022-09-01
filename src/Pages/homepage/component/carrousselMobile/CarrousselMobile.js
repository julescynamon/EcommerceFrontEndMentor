import { useState } from 'react';
import { images } from '../../../../data/images';
import "./carrousselMobile.scss"


export default function App() {

    const [currentProductImage, setCurrentProductImage] = useState(0);

    return (
        <>
            
            <div className="current-image">
            <button
                onClick={() =>
                    setCurrentProductImage((prevState) =>
                        prevState === 0 ? images.length - 1 : prevState - 1
                    )
                }
                className='swippe-control control-prev'>
                <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M11 1 3 9l8 8'
                        stroke='#1D2026'
                        strokeWidth='3'
                        fill='none'
                        fillRule='evenodd'
                    />
                </svg>
            </button>
                <img src={images[currentProductImage].png} alt="" />
                <button
                onClick={() =>
                    setCurrentProductImage((prevState) =>
                        prevState === images.length - 1 ? 0 : prevState + 1
                    )
                }
                className='swippe-control control-next'>
                <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='m2 1 8 8-8 8'
                        stroke='#1D2026'
                        strokeWidth='3'
                        fill='none'
                        fillRule='evenodd'
                    />
                </svg>
            </button>
            </div>
            
        </>
    );
}
