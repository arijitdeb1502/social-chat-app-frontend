import React from 'react';
import { NavLink } from 'react-router-dom';


const buttonClickHandler = (props)=>{
    console.log(props);
}

const UserRegistration = (props)=>(

    <div>
        This is User Registration page.
        <NavLink to="/" exact={true} activeClassName="is-active">
            <button onClick={buttonClickHandler}>
                Home
            </button>
        </NavLink>
    </div>
)

export default UserRegistration;