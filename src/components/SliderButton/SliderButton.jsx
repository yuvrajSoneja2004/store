import React from 'react';
import { Link } from 'react-router-dom';
import S from './SliderButton.module.css'

function SliderButton({ path }) {
    return <Link to={path}><button className={S.sliderBtn}>Explore Now</button></Link>

}

export default SliderButton