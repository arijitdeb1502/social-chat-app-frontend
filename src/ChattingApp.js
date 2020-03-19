import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header";
import Downloads from "./components/downloads/Downloads";
import Features from "./components/features/Features";
import Help from "./components/help/Help";
import UserRegistrationPage from "./components/registration/UserRegistrationPage";
import UserSigninPage from "./components/signin/UserSigninPage";


class ChattingApp extends Component{

  
    constructor(){
      
      super();

      this.resetHeaderDisplayHandler=this.resetHeaderDisplayHandler.bind(this);

      this.state = {
        showHeader: true
      }
    }

    resetHeaderDisplayHandler = () =>{

        this.setState( (prevState)=>{

          return{
            showHeader: !prevState.showHeader
          }
          
        }
      )
    }
    

    render() {

      const headerProps = {
          heading : 'My Chattng App'
      }

      return(
        <BrowserRouter>
          <div>
            {this.state.showHeader && 
            <Header 
               {...headerProps}
               resetHeaderDisplayHandler={this.resetHeaderDisplayHandler}
            />}
            <Switch>
              <Route exact={true} path="/downloads" render={(props) => <Downloads {...props}  />} />
              <Route exact={true} path="/help" render={(props) => <Help {...props}  />} />
              <Route exact={true} path="/features" render={(props) => <Features {...props}  />} />
              <Route exact={true} path="/registration" render={(props) => <UserRegistrationPage {...props}  resetHeaderDisplayHandler={this.resetHeaderDisplayHandler} />} />
              <Route exact={true} path="/signin" render={(props) => <UserSigninPage {...props}  resetHeaderDisplayHandler={this.resetHeaderDisplayHandler} />} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }


}


export default ChattingApp;
