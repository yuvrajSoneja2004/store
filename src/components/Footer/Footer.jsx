import React from 'react';
import S from "./Footer.module.css";
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';
import { GrFacebookOption, GrInstagram, GrLinkedinOption, GrPinterest, GrTwitter } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function Footer() {

    let iconSize = 28;
    let smIconSize = 23;
    return (

        <div className={S.wrapper}>
            <div className={S.grid}>
                <div className={`${S.secA} ${S.listFlex}`}>
                    <img src="./assets/lo.png" alt="logo" width={250} />
                    <div className={S.align}>
                        <CiLocationOn size={iconSize} className={S.footIcons} />
                        <p className={S.noM}>Aditya Nagar , Near Petrol Station,  Koraput 764020</p>

                    </div>
                    <div className={S.align}>
                        <CiMail size={iconSize} className={S.footIcons} />
                        <p className={S.noM}>yuvrajdev20004@gmail.com</p>

                    </div>
                    <div className={S.align}>
                        <CiPhone size={iconSize} className={S.footIcons} />
                        <p className={S.noM}>+91123456789</p>
                    </div>
                    <div className={S.sm}>
                        <a href="https://google.com" target='_blank'><GrFacebookOption size={smIconSize} className={S.fb} /></a>
                        <a href="https://google.com" target='_blank'> <GrTwitter size={smIconSize} className={S.twitter} /></a>
                        <a href="https://google.com" target='_blank'>  <GrInstagram size={smIconSize} className={S.insta} /></a>
                        <a href="https://google.com" target='_blank'> <GrLinkedinOption size={smIconSize} className={S.lin} /></a>
                        <a href="https://google.com" target='_blank'><GrPinterest size={smIconSize} className={S.pintrs} /></a>
                    </div>
                </div>
                <div className={`${S.secB} ${S.listFlex}`}>
                    <strong>Categories</strong>
                    <Link className={S.footerLink} to='/'>Men</Link>
                    <Link className={S.footerLink} to='/'>Women</Link>
                    <Link className={S.footerLink} to='/'>Watch</Link>
                    <Link className={S.footerLink} to='/'>Shoes</Link>
                    <Link className={S.footerLink} to='/'>Accessories</Link>
                </div>
                <div className={`${S.secC} ${S.listFlex}`}>
                    <strong>Useful Links</strong>
                    <Link className={S.footerLink} to='/'>About</Link>
                    <Link className={S.footerLink} to='/'>Contact</Link>
                    <Link className={S.footerLink} to='/'>Shop</Link>
                </div>
                <div className={`${S.secD} ${S.listFlex}`}>
                    <strong>Go To Search Tab</strong>
                    <Link className={S.footerLink} to='/'>
                        <input type="text" placeholder='Click Me' className={S.footerInput} />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Footer