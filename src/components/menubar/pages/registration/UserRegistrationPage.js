import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Registration.css';

class UserRegistration extends Component {

    constructor(props){

        super(props);
        this.onClickHandler=this.onClickHandler.bind(this);

    }

    onClickHandler(){
        this.props.resetHeaderDisplayHandler();  
        //this.props.history.push("http://localhost:3000/"); 
    }

    render() {
        return (
          <div className="formContainer">
            <form className="registrationForm">
              <h1 className="formHeader">Create Account</h1>  
              <label>Name: </label>
              <input type="text"></input>
              <label>Email: </label>
              <input type="text"></input>
              <label>password: </label>
              <input type="text"></input>
              <label>Age: </label>
              <input type="text"></input>
              <button className="RegisterUserButton">Register User</button>
              </form>
              <NavLink to="/" exact={true} activeClassName="is-active">
                 <button className="BackButton" onClick={this.onClickHandler}>
                     Back
                 </button>
             </NavLink> 
            
            
          </div>
        )
      }

}

export default UserRegistration;