import React, { useEffect } from 'react'
import { useGlobalContext } from '../../contexts/globalContext';
import S from './Search.module.css';
import SB from '../Cart/Cart.module.css';
import Sed from '../../assets/sed.jpg';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';

function Search() {

    let { inputData, setInputData, searchRes, onSearch, isLoading, themeState } = useGlobalContext();

    useEffect(() => {
        window.scroll(0, 0);
        console.log(searchRes)
    }, [searchRes])
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className={S.wrapper} style={themeState}>
            <div className={S.searchDiv}>
                <input type="text" placeholder='Search Porducts' value={inputData} onChange={e => setInputData(e.target.value)} />
                <button onClick={onSearch}>Search</button>
            </div>

            <div className={S.grid} style={{ position: 'relative' }}>
                {
                    searchRes.length === 0 ? <NotFound /> : searchRes.map((dat => <ProductCard data={dat} />))
                }

            </div>
        </div>
    )
}



function NotFound() {
    return (
        <div>
            <div className={SB.noItems} >
                <img src={Sed} alt="sed" />
                <h1>No Products Found.</h1>

            </div>
        </div>
    )
}

export { Search, NotFound }