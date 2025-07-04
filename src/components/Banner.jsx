import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../assets/banner/banner1.png';
import banner2 from '../assets/banner/banner2.png';
import banner3 from '../assets/banner/banner3.png';
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div className='container mx-auto'>
            <Carousel infiniteLoop={true} autoPlay={true} interval={1000} showThumbs={false}>
                <div>
                    <img src={banner1} />
                  
                </div>
                <div>
                    <img src={banner2} />
                 
                </div>
                <div>
                    <img src={banner3} />
            
                </div>
            </Carousel>
        </div>
    )
}

export default Banner