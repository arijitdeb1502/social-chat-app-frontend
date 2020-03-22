import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Registration.css';

class UserRegistration extends Component {

    constructor(props){

        super(props);

        this.onBackButtonClickHandler=this.onBackButtonClickHandler.bind(this);
        this.onFormSubmitHandler=this.onFormSubmitHandler.bind(this);
        this.onChangeHandler=this.onChangeHandler.bind(this);

        this.state={
          name: '',
          email: '',
          password: '',
          age: ''
        }

    }


    onChangeHandler = (e)=>{

      // console.log(this.state);
      this.setState( { [e.target.name] : e.target.value } );

      // this.setState( ()=>({ 
      //    [e.persist().target.name] : e.target.value 
      // })
      // );

    }


    onBackButtonClickHandler = ()=>{
        this.props.resetHeaderDisplayHandler();  
        //this.props.history.push("http://localhost:3000/"); 
    }

    onFormSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
          <div className="formContainer">
            <form className="registrationForm" onSubmit={this.onFormSubmitHandler}>
              <h1 className="formHeader">Create Account</h1>  
              <label>Name: </label>
              <input 
                type="text"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.onChangeHandler}      
              />
              <label>Email: </label>
              <input 
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.onChangeHandler}
              />
              <label>password: </label>
              <input 
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.onChangeHandler}
              />
              <label>Age: </label>
              <input 
                type="number"
                name="age"
                placeholder="age"
                value={this.state.age}
                onChange={this.onChangeHandler}
              />
              <button className="RegisterUserButton">Register User</button>
              </form>
              <NavLink to="/" exact={true} activeClassName="is-active">
                 <button className="BackButton" onClick={this.onBackButtonClickHandler}>
                     Back
                 </button>
             </NavLink> 
            
            
          </div>
        )
      }

}

export default UserRegistration;