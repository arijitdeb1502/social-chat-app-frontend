import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class UserRegistration extends Component {

    constructor(props){

        super(props);
        this.onClickHandler=this.onClickHandler.bind(this);

    }

    onClickHandler(){
        this.props.history.push("http://localhost:3000/"); 
        this.props.resetHeaderDisplayHandler();  
    }

    render() {
        return (
          <div>
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