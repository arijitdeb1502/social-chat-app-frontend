import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';

class UserSigninPage extends Component{

    constructor(props){
        super(props);

        this.onClickSignonPageHandler=this.onClickSignonPageHandler.bind(this);
        
    }

    onClickSignonPageHandler(){

        //this.props.history.push("http://localhost:3000/");
        this.props.resetHeaderDisplayHandler();  

        
    }

    render() {
        return(
            <div>
                <h1>This is Signin Page</h1>
                <NavLink to="/" exact={true} activeClassName="is-active">
                 <button onClick={this.onClickSignonPageHandler}>
                     Home
                 </button>
             </NavLink>
            </div>
        )
    }

}

export default UserSigninPage;