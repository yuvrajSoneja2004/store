import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import S from './NavigationBar.module.css';
import Logo from '../../assets/logo.png'
import InvertedLogo from '../../assets/logoInverted.png'
import { useGlobalContext } from '../../contexts/globalContext';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import "../Navbar/navbar.css";
function NavigationBar() {

    let { themeState, themeHandler, cart } = useGlobalContext();

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