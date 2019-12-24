import React ,{ Fragment } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/navstyle.css'

import {MuiThemeProvider} from '@material-ui/core';
import {connect} from 'react-redux';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import primaryTheme from './themes/primaryTheme'
import Career from './routes/Career';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Portofolio from './routes/Portofolio';
import Profile from './routes/Profile';
import NavHeader from './components/navheader';
import MobileNav from './components/mobilenav';
class App extends React.Component{
 
  componentDidUpdate(prevProps){
    if(this.props.location !== prevProps.location){
      window.scrollTo(0, 0)
    }
  }
  render(){
  //   let nav=null
  // if(isMobile){
  //   nav = <MobileNav/>
  // }else{
  //  nav = 
  // }

    return (
      <MuiThemeProvider theme={primaryTheme}>
      
        <Router>
          <NavHeader/>
      
          <Fragment>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/profile">
                  <Profile/>
                </Route>
                <Route path="/portofolio">
                  <Portofolio/>
                </Route>
                <Route path="/career">
                  <Career/>
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
                <Route path="/menu">
                  <MobileNav/>
                </Route>
              </Switch>
          </Fragment>
        </Router>
    </MuiThemeProvider>
  );
}
  
}

export default App;
// <Link classNameName="nav-link" id="polio" to="/portofolio"><p style={{color:'white'}}>Portofolio</p></Link>