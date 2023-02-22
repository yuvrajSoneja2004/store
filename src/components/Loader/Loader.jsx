import React from 'react';
import S from './Loader.module.css';

function Loader() {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}><span className={S.loader}></span></div>


}

export default Loader