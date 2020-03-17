import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.css';


class Header extends Component {

    render(){

        return(
          <div className="header-element">
            <div className="app-name">
                {this.props.heading}
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
                <button className="signin-button">Sign in</button>
                <div className="dropdown-menu" id="dropdown-item-id">
                    <NavLink to="/registration" exact={true} className="nav-link" activeClassName="is-active">
                        Registration
                    </NavLink>
                    <NavLink to="/signin" exact={true} className="nav-link" activeClassName="is-active">
                        Sign in
                    </NavLink>
                </div>
            </div>
        </div>
        )
    }
    
}


export default Header;