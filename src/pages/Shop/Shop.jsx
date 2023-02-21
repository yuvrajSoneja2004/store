import React, { useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar';
import { useGlobalContext } from '../../contexts/globalContext';
import S from './Shop.module.css';
import Styles from '../../components/GenreSection/GenreSection.module.css';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
// import Cumb from '../../components/Cumb/Cumb'

function Shop() {
    let { loadingSpeedController, setLoadingProgress } = useGlobalContext();

    useEffect(() => {
        setTimeout(() => {
            setLoadingProgress(30);
        }, 200);

        setTimeout(() => {
            setLoadingProgress(100);
        }, 1000);

    }, [])
    return (
        <>
            <div className={S.wrapper}>
                <div className={S.collection}>
                    <h1>Collection</h1>
                </div>


                <div className={S.shopGrid}>
                    <div className={`${S.gridItem} ${S.bgA}`}><CategoryButton type="Women" path='/products/women' /></div>
                    <div className={`${S.gridItem} ${S.bgB}`}><CategoryButton type="Men" path='/products/men' /></div>
                    <div className={`${S.gridItem} ${S.bgC}`}><CategoryButton type="Perfumes" path='/products/perfumes' /></div>
                    <div className={`${S.gridItem} ${S.bgD}`}><CategoryButton type="Footwear" path='/products/footwear' /></div>
                    <div className={`${S.gridItem} ${S.bgE}`}><CategoryButton type="Tech" path='/products/tech' /></div>
                    <div className={`${S.gridItem} ${S.bgF}`}><CategoryButton type="Sale" path='/products/sale' /></div>
                </div>


            </div>
        </>
    )
}

export default Shop