import React from 'react';
import { useGlobalContext } from '../../contexts/globalContext';
import ProductCard from '../ProductCard/ProductCard';
import S from './BestSellerSection.module.css';

function BestSellerSection() {

    let { bestSellingProducts, themeState } = useGlobalContext();
    return (
        <div className={S.grid} style={themeState}>
            {
                bestSellingProducts.slice(0, 6).map((prod) => {
                    return <ProductCard data={prod} key={prod._id} />
                })
            }
        </div>
    )
}

export default BestSellerSection