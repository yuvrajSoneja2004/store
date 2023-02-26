import React from "react";
import { useGlobalContext } from "../../contexts/globalContext";
import CategoryButton from "../CategoryButton/CategoryButton";
import S from './GenreSection.module.css';

const GenreSection = () => {
    let { themeState } = useGlobalContext();

    return (
        <div className={S.gridCen} style={themeState}>
            <div className={S.wrapper}>
                <div className={`${S.gridItem} ${S.gA}`}><CategoryButton type="Women" path='/products/women' /></div>
                <div className={`${S.gridItem} ${S.gB}`}><CategoryButton type="Perfumes" path='/products/perfumes' /></div>
                <div className={`${S.gridItem} ${S.gC}`}><CategoryButton type="Footwear" path='/products/footwear' /></div>
                <div className={`${S.gridItem} ${S.gD}`}><CategoryButton type="Men" path='/products/men' /></div>
            </div>
        </div>
    )
}

export default GenreSection;