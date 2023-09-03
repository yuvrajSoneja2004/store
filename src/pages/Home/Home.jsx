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
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useGlobalContext } from '../../contexts/globalContext'



function Home() {

    const { dispatch } = useGlobalContext();

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    useEffect(() => {
        let getUser = async () => {
            if(localStorage.getItem("user_id") != null){
                let { data : { msg } } = await axios.get(`https://purple-anemone-veil.cyclic.app/getParticularUser/${localStorage.getItem("user_id") === null ? "" : localStorage.getItem("user_id")}`);

            console.log(msg , 'this is the data man  i ma gay');
            dispatch({type: "SET_USER_PROFILE_INFO" , payload: msg})
            }
        }
        getUser()
    } , [])


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