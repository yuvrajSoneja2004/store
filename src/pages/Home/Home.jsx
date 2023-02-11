import React from 'react'
import GenreSection from '../../components/GenreSection/GenreSection'
import Homeheadings from '../../components/HomeHeadings/Homeheadings'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import SaleGallery from '../../components/SaleGallery/SaleGallery'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import TrendingSection from '../../components/TrendingSection/TrendingSection'


function Home() {
    return (
        <>
            <HomeSlider />
            <GenreSection />
            <Homeheadings title="trending" desc="Top view in this week" />
            <TrendingSection />
            <SaleGallery />
            <Homeheadings title="best seller" desc="Top sale in this week" />
            <ServicesSection />

        </>
    )
}

export default Home