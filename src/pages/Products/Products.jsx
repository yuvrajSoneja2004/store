import React, { useEffect, useState } from 'react';
import S from './Products.module.css';
import { Dropdown } from 'react-bootstrap';
import { useGlobalContext } from '../../contexts/globalContext';
import Loader from '../../components/Loader/Loader'
import ProductCard from '../../components/ProductCard/ProductCard';
import { motion } from 'framer-motion';

function Products() {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])


    const { isLoading, products, getAsendingData, getDesendingData, getHighToLow, getLowToHigh, loadingSpeedController, themeState } = useGlobalContext();

    useEffect(loadingSpeedController, [])


    // Dynamic grid styles state
    const [gridType, setGridType] = useState({
        gridTemplateColumns: '1fr 1fr 1fr'
    });


    const [cardWidth, setCardWidth] = useState({ width: '30rem', minHeight: '43rem' });

    // Defining Functions for layout logic

    const layoutAFun = () => {
        setGridType({ gridTemplateColumns: '1fr 1fr 1fr ' });
        setCardWidth({ width: '30rem', minHeight: '43rem' });
    }

    const layoutBFun = () => {
        setGridType({ gridTemplateColumns: '1fr 1fr 1fr 1fr' })
        setCardWidth({ width: '30rem', minHeight: '43rem' });
    }

    const layoutCFun = () => {
        setGridType({
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',


        });
        setCardWidth({ width: '24rem', minHeight: '40rem' })
    }







    if (isLoading) {
        return <Loader />
    }

    return (
        <motion.div
        initial={{opacity: 0 , y: 30}}
        animate={{opacity: 1 , y: 0}}
        transition={{duration: .1}}
        exit={{opacity: 0 , y: 30}}
        >
            <div className={S.container} style={themeState}>
                <div className={S.filterNav}>
                    <div></div>
                    <div className={S.lay}>

                        <div className={S.layoutIcons} onClick={layoutAFun}>
                            <img src="./assets/layoutIcons/A.png" alt="layout-A" width={44} />
                        </div>


                        <div className={S.layoutIcons} onClick={layoutBFun}>
                            <img src="./assets/layoutIcons/B.png" alt="layout-B" width={44} />
                        </div>


                        <div className={S.layoutIcons} onClick={layoutCFun}>
                            <img src="./assets/layoutIcons/C.png" alt="layout-C" width={44} />
                        </div>

                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className={`fs-3 ${S.dropBtn}`}>
                                <span>Sort</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='fs-3'>
                                <Dropdown.Item onClick={getAsendingData}>Alphabetically: A-Z</Dropdown.Item>
                                <Dropdown.Item onClick={getDesendingData} >Alphabetically: Z-A</Dropdown.Item>
                                <Dropdown.Item onClick={getLowToHigh}>Price: Low to High</Dropdown.Item>
                                <Dropdown.Item onClick={getHighToLow}>Price: High to Low</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className={S.productsGrid} style={{ display: 'grid', placeItems: 'center', ...gridType, rowGap: '7rem', marginTop: '5rem' }}>

                    {
                        products.map((product) => {
                            return <ProductCard data={product} key={product._id} wid={cardWidth} />
                        })

                    }
                </div>

            </div>
        </motion.div>
    )
}

export default Products