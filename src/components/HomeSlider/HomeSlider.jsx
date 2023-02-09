import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import S from './HomeSlider.module.css';
import { useGlobalContext } from '../../contexts/globalContext'
import SliderButton from '../SliderButton/SliderButton';

function HomeSlider() {

    let { bgTheme, fontTheme } = useGlobalContext()
    return (
        <>
            <div className="carousel-wrapper" >
                {/*   */}
                <Carousel infiniteLoop useKeyboardArrows={false} showStatus={false} showThumbs={false} autoPlay={true} swipeable={false}>
                    <div className={S.homeSliderA}>
                        <div>
                            <h3>summer 2023</h3>
                            <h1>new arrival collection</h1>
                            <SliderButton path='/new-arrival' />
                        </div>
                    </div>
                    <div className={S.homeSliderB}>
                        <div>
                            <h3>summer 2023</h3>
                            <h1>Lookbook collection</h1>
                            <SliderButton path='/lookbook-collection' />
                        </div>
                    </div>
                    <div className={S.homeSliderC}>
                        <div>
                            <h3>summer 2023</h3>
                            <h1>save upto 70% off</h1>
                            <SliderButton path='/sale-products' />
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default HomeSlider