import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.css';

const handleDropdown=()=>{
    document.getElementById("dropdown-item-id").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.signin-button')) {
      let dropdowns = document.getElementsByClassName("dropdown-menu");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

const Header = (props)=>(

          <div className="header-element">
            <div className="app-name">
                {props.heading}
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
            <div className="user-registration-or-signin-menu">
                <button className="signin-button" onClick={handleDropdown} >Sign in</button>
                <div className="dropdown-menu" id="dropdown-item-id" >
                    <NavLink to="/registration" exact={true} className="nav-link-dropdown" activeClassName="is-active">
                        Registration
                    </NavLink>
                    <NavLink to="/signin" exact={true} className="nav-link-dropdown" activeClassName="is-active">
                        Sign in
                    </NavLink>
                </div>
            </div>
        </div>

)


export default Header;