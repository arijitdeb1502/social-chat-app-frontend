import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ()=> ( 
    <div>
        <h1>
            My Chatting App
        </h1>
        <NavLink to="/downloads" exact={true} >
            downloads    
        </NavLink>
        <NavLink to="/features" exact={true} >
            Features    
        </NavLink>
        <NavLink to="/help" exact={true}>
            Help
        </NavLink>
        <NavLink to="/signin">
        </NavLink>
    </div>
)

export default Header;