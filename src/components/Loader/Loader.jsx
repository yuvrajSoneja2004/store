import React from 'react';
import S from './Loader.module.css';
import { motion } from 'framer-motion';

function Loader() {
    return <motion.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }} initial={{scale: 0}} animate={{scale: 1}} transition={{duration: .1}} exit={{scale: 0}}><span className={S.loader}></span></motion.div>


}

export default Loader
