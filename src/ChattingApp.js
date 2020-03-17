import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header";
import Downloads from "./components/downloads/Downloads";
import Features from "./components/features/Features";
import Help from "./components/help/Help";


class ChattingApp extends Component{

    

    render() {

      const headerProps = {
          heading : 'My Chattng App'
      }

      return(
        <BrowserRouter>
          <div>
            <Header {...headerProps}/>
            <Switch>
              <Route exact={true} path="/downloads" render={(props) => <Downloads {...props}  />} />
              <Route exact={true} path="/help" render={(props) => <Help {...props}  />} />
              <Route exact={true} path="/features" render={(props) => <Features {...props}  />} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }


}


export default ChattingApp;
