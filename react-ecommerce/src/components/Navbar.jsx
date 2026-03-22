import { Link, NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const location = useLocation();
    const { cart } = useContext(CartContext);
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <>
            {/* ================== DESKTOP NAVBAR ================== */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-body d-none d-lg-block shadow-sm" data-bs-theme="light">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">
                        <img src="/images/logo.png" alt="Logo" width="80px" height="80px"
                            className="d-inline-block align-text" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} to="/products">Products</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} to="/blog">Blogs</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className={`nav-link ${location.pathname === '/policies' ? 'active' : ''}`} to="/policies">Policies</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className={`nav-link position-relative ${location.pathname === '/wishlist' ? 'active' : ''}`} to="/wishlist">
                                    <i className="fa fa-heart"></i>
                                </Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className={`nav-link position-relative ${location.pathname === '/cart' ? 'active' : ''}`} to="/cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    {totalQty > 0 && (
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                                            {totalQty}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ================== MOBILE BOTTOM NAVIGATION ================== */}
            <nav className="navbar fixed-bottom bg-light border-top d-lg-none shadow-lg">
                <div className="container-fluid d-flex justify-content-around text-center">

                    {/* Home */}
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "text-dark text-decoration-none" : "text-secondary text-decoration-none"
                        }
                    >
                        <div>
                            <i className="fa fa-home fs-5"></i>
                            <div style={{ fontSize: '12px' }}>Home</div>
                        </div>
                    </NavLink>

                    {/* Products */}
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "text-dark text-decoration-none" : "text-secondary text-decoration-none"
                        }
                    >
                        <div>
                            <i className="fa fa-box fs-5"></i>
                            <div style={{ fontSize: '12px' }}>Products</div>
                        </div>
                    </NavLink>

                    {/* Wishlist */}
                    <NavLink
                        to="/wishlist"
                        className={({ isActive }) =>
                            isActive ? "text-dark text-decoration-none" : "text-secondary text-decoration-none"
                        }
                    >
                        <div>
                            <i className="fa fa-heart fs-5"></i>
                            <div style={{ fontSize: '12px' }}>Wishlist</div>
                        </div>
                    </NavLink>

                    {/* Cart */}
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            isActive ? "text-dark text-decoration-none position-relative" : "text-secondary text-decoration-none position-relative"
                        }
                    >
                        <div className="position-relative">
                            <i className="fa fa-shopping-cart fs-5"></i>
                            {totalQty > 0 && (
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                    style={{ fontSize: '10px' }}
                                >
                                    {totalQty}
                                </span>
                            )}
                            <div style={{ fontSize: '12px' }}>Cart</div>
                        </div>
                    </NavLink>

                    {/* About */}
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-dark text-decoration-none" : "text-secondary text-decoration-none"
                        }
                    >
                        <div>
                            <i className="fa fa-info-circle fs-5"></i>
                            <div style={{ fontSize: '12px' }}>About</div>
                        </div>
                    </NavLink>

                    {/* Contact */}
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "text-dark text-decoration-none" : "text-secondary text-decoration-none"
                        }
                    >
                        <div>
                            <i className="fa fa-phone fs-5"></i>
                            <div style={{ fontSize: '12px' }}>Contact</div>
                        </div>
                    </NavLink>

                </div>
            </nav>
        </>
    );
};

export default Navbar;
