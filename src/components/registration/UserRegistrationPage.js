import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class UserRegistration extends Component {

    constructor(props){

        super(props);
        this.onClickHandler=this.onClickHandler.bind(this);

    }

    onClickHandler(){
        this.props.resetHeaderDisplayHandler();  
        // this.props.history.push("http://localhost:3000/"); 
    }

    render() {
        return (
          <div>
            <h1>This is UserRegistration page</h1>  
            <NavLink to="/" exact={true} activeClassName="is-active">
                 <button onClick={this.onClickHandler}>
                     Home
                 </button>
             </NavLink>
          </div>
        )
      }

}

export default UserRegistration;