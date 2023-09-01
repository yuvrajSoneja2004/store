import React from 'react'
import { useEffect } from 'react'
import BestSellerSection from '../../components/BestSellerSection/BestSellerSection'
import GenreSection from '../../components/GenreSection/GenreSection'
import Homeheadings from '../../components/HomeHeadings/Homeheadings'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import SaleGallery from '../../components/SaleGallery/SaleGallery'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import TrendingSection from '../../components/TrendingSection/TrendingSection'
import { motion } from 'framer-motion'



function Home() {

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <motion.div
        initial={{opacity: 0 , y: 30}}
        animate={{opacity: 1 , y: 0}}
        exit={{opacity: 0 , y: 30}}
        transition={{duration: .1}}

        >
            <HomeSlider />
            <GenreSection />
            <Homeheadings title="trending" desc="Top view in this week" />
            <TrendingSection />
            <SaleGallery />
            <Homeheadings title="best seller" desc="Top sale in this week" />
            <BestSellerSection />
            <ServicesSection />
        </motion.div>
    )
}

export default Home