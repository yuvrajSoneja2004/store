import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import S from './Products.module.css';

function Products() {
    const [styling, setStyling] = useState({
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
    });



    return (
        <>
            <div className={S.headerBg}>
                <div>
                    <h2>Products</h2>
                    <label> <Link to='/' className={S.noLink}>Home</Link> <span>&gt:</span> Products</label>
                </div>
            </div>

            <button onClick={() => {
                setStyling({
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
                })
            }}>1 row</button>
            <button onClick={() => {
                setStyling({
                    gridTemplateColumns: '1fr 1fr'
                })
            }}>2 rows</button>
            <button onClick={() => {
                setStyling({
                    gridTemplateColumns: '1fr'
                })
            }}>3 rows</button>

            <div className={S.test} style={styling}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        </>
    )
}

export default Products