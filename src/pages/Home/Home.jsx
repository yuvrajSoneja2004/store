import React from 'react'
import Footer from '../Footer/Footer'
import GenreSection from '../GenreSection/GenreSection'
import Homeheadings from '../HomeHeadings/Homeheadings'
import HomeSlider from '../HomeSlider/HomeSlider'
import SaleGallery from '../SaleGallery/SaleGallery'
import ServicesSection from '../ServicesSection/ServicesSection'
import TrendingSection from '../TrendingSection/TrendingSection'


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
            <Footer />
        </>
    )
}

export default Home