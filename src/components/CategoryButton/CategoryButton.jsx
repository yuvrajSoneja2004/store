import React from 'react'
import { Link } from 'react-router-dom';
import S from './CategoryButton.module.css';

function CategoryButton({ type, path }) {
    return <Link to={path}><button className={S.categoryBtn}>{type}</button></Link>

}


export default CategoryButton;