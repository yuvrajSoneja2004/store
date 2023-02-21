import React, { useState } from 'react';
import './Icon.css';
import S from '../../pages/Products/Products.module.css';

function Icon(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
        props.onIconClick(props.iconId);
    };

    return (
        <div
            className={`icon ${isActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            {/* <img src={props.iconSrc} alt={props.iconAlt} /> */}
            {/* onClick={layoutAFun} */}
            <div className={S.layoutIcons} >
                <img src={props.iconSrc} alt={props.iconAlt} width={44} />
            </div>

        </div>
    );
}

export default Icon;