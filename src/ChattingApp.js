import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header";
import Downloads from "./components/downloads/Downloads";
import Features from "./components/features/Features";
import Help from "./components/help/Help";


class ChattingApp extends Component{

    render() {
      return(
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route exact path="/downloads" render={(props) => <Downloads {...props}  />} />
              <Route exact path="/features" render={(props) => <Features {...props}  />} />
              <Route exact path="/help" render={(props) => <Help {...props}  />} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }


}


export default ChattingApp;
