import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import S from './HomeSlider.module.css';
import SliderButton from '../SliderButton/SliderButton';

function HomeSlider() {

    return (
        <>
            <div className="carousel-wrapper" >
                {/*   */}
                <Carousel infiniteLoop useKeyboardArrows={false} showStatus={false} showThumbs={false} autoPlay={true} swipeable={false}>
                    <div className={S.homeSliderA} >
                        <div data-aos="fade-up">
                            <h3 data-aos="fade-up">summer 2023</h3>
                            <h1 data-aos="fade-up" data-aos-delay="50">new arrival collection</h1>
                            <SliderButton path='/products' data-aos="fade-up" data-aos-delay="500" />
                        </div>
                    </div>
                    <div className={S.homeSliderB}>
                        <div>
                            <h3>summer 2023</h3>
                            <h1>Lookbook collection</h1>
                            <SliderButton path='/products' />
                        </div>
                    </div>
                    <div className={S.homeSliderC}>
                        <div>
                            <h3>summer 2023</h3>
                            <h1>save upto 70% off</h1>
                            <SliderButton path='/products/sale' />
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default HomeSlider