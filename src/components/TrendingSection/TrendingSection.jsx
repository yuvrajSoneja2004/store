import React, { useState } from 'react'
import { useGlobalContext } from '../../contexts/globalContext';
import S from './TrendingSection.module.css';
import ProductCard from '../ProductCard/ProductCard';

function TrendingSection() {
    const [hasToLoad, sethasToLoad] = useState(false);
    const [hidingStyles, setHidingStyles] = useState({ display: 'block' });
    let { trendingProducts, themeState } = useGlobalContext();
    console.log(trendingProducts)
    return (
        <div style={themeState}>
            {/* dynamic  code here  */}
            <div className={S.grid} data-aos="fade-up">
                {/* {
                    
                    })
                } */}
                {
                    hasToLoad === false ? trendingProducts.slice(0, 6).map((prod, i) => {
                        return <ProductCard data={prod} key={i} />
                    }) : trendingProducts.map((prod, i) => {
                        return <ProductCard data={prod} key={i} />
                    })

                }
            </div>

            {/* Load more button  */}
            <div className={S.loadMoreBtn} style={hidingStyles}>
                <button onClick={() => { sethasToLoad(true); setHidingStyles({ display: 'none' }) }}>load more</button>
            </div>

        </div>
    )
}

export default TrendingSection