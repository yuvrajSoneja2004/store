import React, { useState } from 'react'
import { useGlobalContext } from '../../contexts/globalContext';
import S from './TrendingSection.module.css';
import ProductCard from '../ProductCard/ProductCard';

function TrendingSection() {
    const [hasToLoad, sethasToLoad] = useState(false);
    const [hidingStyles, setHidingStyles] = useState({ display: 'block' });
    let { trendingProducts } = useGlobalContext();
    console.log(trendingProducts)
    return (
        <div>
            {/* dynamic  code here  */}
            <div className={S.grid}>
                {/* {
                    
                    })
                } */}
                {
                    hasToLoad === false ? trendingProducts.slice(0, 6).map((prod) => {
                        return <ProductCard data={prod} />
                    }) : trendingProducts.map((prod) => {
                        return <ProductCard data={prod} />
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