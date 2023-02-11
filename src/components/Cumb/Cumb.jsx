import React from 'react';
import { Link } from 'react-router-dom';
import S from '../../pages/Products/Products.module.css';

function Cumb({ title, bgUrl }) {
    return <div className={S.headerBg} style={{ backgroundImage: `url(${bgUrl})` }}>
        <div>
            <h2>{title}</h2>
            <label> <Link to='/' className={S.noLink}>Home</Link> <span>&gt;</span> Products</label>
        </div>
    </div>

}

export default Cumb