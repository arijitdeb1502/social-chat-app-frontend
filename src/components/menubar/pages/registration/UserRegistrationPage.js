import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import constants from '../../../../constants/AllPageConfigurations';
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
          age: '',
          showNameErrMsg: false,
          showEmailErrMsg: false,
          showPasswordErrMsg: false,
          showAgeErrMsg: false,
        }

    }


    onChangeHandler = (e)=>{

      this.setState( { 
        [e.target.name] : e.target.value,
        showNameErrMsg: false,
        showEmailErrMsg: false,
        showPasswordErrMsg: false,
        showAgeErrMsg: false 
      } );

    }


    onBackButtonClickHandler = ()=>{
        this.props.resetHeaderDisplayHandler();  
        //this.props.history.push("http://localhost:3000/"); 
    }

    onFormSubmitHandler = async (e) => {
        e.preventDefault();
        
        const { name,email,password,age } = { ...this.state };
        

        this.setState(()=>{
          return {
            showNameErrMsg: !validator.isAlpha(name.replace(/ /g,'')),
            showEmailErrMsg: !validator.isEmail(email),
            showPasswordErrMsg: !this.isValidPassword(password),
            showAgeErrMsg: !(validator.isInt(age) && this.isMinAge(age))
          }
        })

     
        const validFormFields = validator.isAlpha(name.replace(/ /g,'')) &&
                                   validator.isEmail(email) &&
                                   this.isValidPassword(password) &&
                                   (validator.isInt(age) && this.isMinAge(age));
        
        console.log(validFormFields);

        if( validFormFields ) {

             
              const settings = {
                Method: 'POST',
                Body: JSON.stringify({
                  name,
                  email,
                  password,
                  age
                }),
                Headers: {
                  'Content-Type': 'application/json',
                }
              }
          
               
              const resp=await fetch( constants.UserRegistrationPage.userRegistrationUrl , settings); 
              console.log(resp);
            

        } 
    
        
        // const userBody={ name,email,password,age };

        
    }

    isValidPassword=(password)=>{

      return password.length >=6 ? true:false 

    }

    isMinAge = (age)=>{
        return age >=18 ? true:false
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
              {this.state.showNameErrMsg && <div className="formValidationError">"{this.state.name}" is not a valid name.</div>}
              <label>Email: </label>
              <input 
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.onChangeHandler}
              />
              {this.state.showEmailErrMsg && <div className="formValidationError">{this.state.email} is not a valid email.</div>}
              <label>password: </label>
              <input 
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.onChangeHandler}
              />
              {this.state.showPasswordErrMsg && <div className="formValidationError">{this.state.password} is not a valid password.</div>}
              <label>Age: </label>
              <input 
                type="number"
                name="age"
                placeholder="age"
                value={this.state.age}
                onChange={this.onChangeHandler}
              />
              {this.state.showAgeErrMsg && <div className="formValidationError">{this.state.age} is not a valid age to use this app.<br/>
                                                      Age should be more than or equal to 18 years.
                                           </div>}
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