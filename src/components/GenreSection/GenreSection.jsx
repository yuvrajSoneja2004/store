import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import S from './GenreSection.module.css';

const GenreSection = () => {
    return (
        <div className={S.gridCen}>
            <div className={S.wrapper}>
                <div className={`${S.gridItem} ${S.gA}`}><CategoryButton type="Women" path='/products/women' /></div>
                <div className={`${S.gridItem} ${S.gB}`}><CategoryButton type="Accessories" path='/' /></div>
                <div className={`${S.gridItem} ${S.gC}`}><CategoryButton type="Footwear" path='/' /></div>
                <div className={`${S.gridItem} ${S.gD}`}><CategoryButton type="Watches" path='/' /></div>
            </div>
        </div>
    )
}

export default GenreSection;