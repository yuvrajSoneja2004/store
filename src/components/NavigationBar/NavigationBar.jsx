import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import S from './NavigationBar.module.css';
import Logo from '../../assets/logo.png'
import InvertedLogo from '../../assets/logoInverted.png'
import { useGlobalContext } from '../../contexts/globalContext';
import { CiSearch, CiShoppingCart , CiLogin } from 'react-icons/ci';
import {FiLogOut} from 'react-icons/fi';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import "../Navbar/navbar.css";
import { useAuth0 } from '@auth0/auth0-react';
import SliderButton from '../SliderButton/SliderButton';
import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
function NavigationBar() {
     // AuthO loginWithRedirect config
  const { loginWithRedirect , user , isAuthenticated, logout , isLoading  } = useAuth0();

    let { themeState, themeHandler, cart   } = useGlobalContext();

    useEffect(() => {
console.log(user , "THis is user" , isAuthenticated);
    } , [])

    return (
        <Navbar style={themeState} expand="lg" className={S.navB}>
            <Container className={S.wrapper}>
                <Link to='/' style={{ margin: '1rem' }}> <Navbar.Brand><img src={!themeState.isDarkMode ? Logo : InvertedLogo} alt="logo" width={110} /></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={!themeState.isDarkMode ? `${S.myToggleB}` : `${S.myToggle}`} />
                <Navbar.Collapse id="basic-navbar-nav" className={S.mobileNav} >
                    <Nav style={{ marginLeft: 'auto', }}>
                        <Nav.Link className={S.navLink}><Link to='/' className={S.noLink} ><strong style={themeState}>Home</strong></Link></Nav.Link>
                        <Nav.Link className={S.navLink}><Link to='/shop' className={`${S.noLink} cumb`} > <span className="spanNew">New</span><strong style={themeState}>Shop</strong></Link></Nav.Link>
                        <Nav.Link className={S.navLink}><Link to='/products' className={S.noLink}><strong style={themeState}>Products</strong></Link></Nav.Link>
                        <Nav.Link className={S.navLink}><Link to='/products/sale' className={`${S.noLink} cumb`} > <span className="spanSale">Sale</span><strong style={themeState}>Sale</strong></Link></Nav.Link>
                        <Nav.Link className={S.navLink}><Link to='/about' className={S.noLink}><strong style={themeState}>About</strong></Link></Nav.Link>
                        <Nav.Link className={S.navLink}><Link to='/contact' className={S.noLink}><strong style={themeState}>Contact</strong></Link></Nav.Link>
                    
                        <div className={S.sm}>
                            <span

                                style={themeState}
                                className={S.navIcons}

                            >
                                {
                                    !themeState.isDarkMode ? <MdOutlineNightlight size={26} style={themeState} className={S.navIcons} onClick={themeHandler} />
                                        : <MdOutlineLightMode size={26} style={themeState} className={S.navIcons} onClick={themeHandler} />
                                }
                            </span>
                            <Link
                                to='/search'
                                style={themeState}
                                className={S.navIcons}
                              

                            >
                                <CiSearch size={26} style={themeState} className={S.navIcons} />
                            </Link>
 {/* Login  */}
                                {
                                    !isAuthenticated ? (
                                        !isLoading ? (
                                            <span
                                style={themeState}
                                className={S.navIcons}
                                onClick={() => loginWithRedirect()}

                            >
                                <CiLogin size={26} style={themeState} className={S.navIcons} />
                            </span>
                                        ) : "Loading.."
                                    ) : 
                                        <span style={{display: 'inline !important'}}>
                                           <Dropdown style={{display: 'inline !important'}}>
                                           <Dropdown.Toggle id="dropdown-basic" style={{background: 'transparent !important'}}>
                                    <img src={user?.picture} alt='userProfile' className='auth-user-img' style={{
                                        width: '27px',
                                        borderRadius: '50%'
                                    }} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ background: 'transperent !important' }} className='myDrop' >
                                    <Dropdown.Item href="#/action-1" onClick={() => { logout() }} style={{fontSize: '1.6rem'}}> <FiLogOut /> Logout</Dropdown.Item>

                                </Dropdown.Menu>
                                           </Dropdown>
                                        </span>
                                    
                                }
                            <div className={S.cartIcon} style={{ position: 'relative', display: 'inline', ...themeState }} >
                                <Link
                                    to='/cart'
                                    style={themeState}
                                    className={S.navIcons}
                                >
                                    <CiShoppingCart size={26} style={themeState}
                                        className={S.navIcons} />

                                </Link>
                                <span className={S.cartCount} style={themeState}>{cart.length > 99 ? "99+" : cart.length}</span>
                            </div>
                            
                           
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;