import React, { useEffect } from 'react'
import { useGlobalContext } from '../../contexts/globalContext';
import S from './Shop.module.css';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import { motion } from 'framer-motion';

function Shop() {
    let { setLoadingProgress, themeState } = useGlobalContext();

    useEffect(() => {
        window.scrollTo(0, 0);

        setTimeout(() => {
            setLoadingProgress(30);
        }, 200);

        setTimeout(() => {
            setLoadingProgress(100);
        }, 1000);


    }, [])
    return (
        <motion.div
        initial={{opacity: 0 , y: 30}}
        animate={{opacity: 1 , y: 0}}
        transition={{duration: .1}}
        exit={{opacity: 0 , y: 30}}
        >
            <div className={S.wrapper}>
                <div className={S.collection} style={{ margin: '0', paddingBottom: '7rem !important' }}>
                    <h1>Collection</h1>
                </div>


                <div className={S.shopGrid} style={themeState}>
                    <div className={`${S.gridItem} ${S.bgA}`}><CategoryButton type="Women" path='/products/women' /></div>
                    <div className={`${S.gridItem} ${S.bgB}`}><CategoryButton type="Men" path='/products/men' /></div>
                    <div className={`${S.gridItem} ${S.bgC}`}><CategoryButton type="Perfumes" path='/products/perfumes' /></div>
                    <div className={`${S.gridItem} ${S.bgD}`}><CategoryButton type="Footwear" path='/products/footwear' /></div>
                    <div className={`${S.gridItem} ${S.bgE}`}><CategoryButton type="Tech" path='/products/tech' /></div>
                    <div className={`${S.gridItem} ${S.bgF}`}><CategoryButton type="Sale" path='/products/sale' /></div>
                </div>
            </div>
            </motion.div>
        
    )
}

export default Shop