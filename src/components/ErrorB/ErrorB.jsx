import React from 'react';
import IMG from '../../assets/errorB.png'

function ErrorB() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={IMG} alt="500 internal server error" style={{ maxWidth: '100%' }} />
        </div>
    )
}

export default ErrorB