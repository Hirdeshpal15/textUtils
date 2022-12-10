import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <Link className="navbar-brand" >TextUtils</Link>
                    <div className="collapse">
                        <ul className="navul">
                            <li className="navitem">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" >Contacts</Link>
                            </li>
                        </ul>
                        <form className="form">
                            <button className="btn" type="submit">Enable</button>
                            <span>Enable Dark Mode</span>
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar
