import React from 'react'
import { useEffect } from 'react'
import BestSellerSection from '../../components/BestSellerSection/BestSellerSection'
import GenreSection from '../../components/GenreSection/GenreSection'
import Homeheadings from '../../components/HomeHeadings/Homeheadings'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import SaleGallery from '../../components/SaleGallery/SaleGallery'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import TrendingSection from '../../components/TrendingSection/TrendingSection'


function Home() {

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <>
            <HomeSlider />
            <GenreSection />
            <Homeheadings title="trending" desc="Top view in this week" />
            <TrendingSection />
            <SaleGallery />
            <Homeheadings title="best seller" desc="Top sale in this week" />
            <BestSellerSection />
            <ServicesSection />

        </>
    )
}

export default Home