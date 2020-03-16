import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.css';

const Header = ()=> ( 
    <div className="header-element">
        <div className="app-name">
            My Chatting App
        </div>
        <div className="all-pages">
            <NavLink to="/downloads" exact={true} className="nav-link" activeClassName="is-active">
                downloads    
            </NavLink>
            <NavLink to="/help" exact={true} className="nav-link" activeClassName="is-active">
                help    
            </NavLink>
            <NavLink to="/features" exact={true} className="nav-link" activeClassName="is-active">
                Features
            </NavLink>
        </div>
        {/* <div className="user-registration-or-signin">
            Sign in
            <ul>My Acount</ul>
            <ul>My Acount</ul>
        </div> */}
    </div>
)

export default Header;