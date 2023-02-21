import React from 'react';
import S from './Error.module.css';
import ErrorImg from './error.png'

function Error() {
    return (
        <>
            <div className={S.wrapper}>
                <div className={S.content}>
                    <img src={ErrorImg} alt="404-page-not-found" />
                    <h1>Whoops!</h1>
                    <p>No Internet connection found. Check your connection and try again.</p>
                </div>
            </div>
        </>
    )
}

export default Error