import React,{Component} from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'

class NavHader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  openNavMobile=()=>{
        if(this.state.open===false){
            this.setState({open:true})
        }else{
            this.setState({open:false})
            if(this.state.prevUrl===this.state.ContactUrl){

            }
        }
    }
    render() {
      let{prevUrl,toUrl1,open}=this.state
        return(
            <nav className="navbar navbar-light bg-info navbar-expand-lg justify-content-between" id="bgnav1">
                <button className="navbar-toggler order-2" type="button" data-toggle="collapse" data-target="#navbar-list-9" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={e => this.handleToggle(e)}>
                        <span className="navbar-toggler-icon"></span>
                  </button>
                <a className="navbar-brand mx-lg-0 order-1 order-lg-2" href="#">
                    <img src={require('../../assets/icons/mini2.png')} style={{marginRight:'5px'}} width="40" height="40" alt="logo"/>
                    AsepPortofolio
                </a>
                <div className="collapse navbar-collapse w-100 order-3 order-lg-1" id="navbar-list-9">
                <ul className={`navbar-nav collapsed ${this.state.isExpanded ? "is-expanded" : ""}`}>
                    <li className="nav-item active">
                    <Link className="nav-link" to="/" ><p style={{color:'white'}} >Home</p></Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/profile"><p  style={{color:'white'}} >Profile</p></Link>
                  </li>
                  <li className="nav-item">
                  <div className="collapse navbar-collapse justify-content-end w-100 order-3" id="navbar-list-9">
                  <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                      <a className="nav-link"  id="navbarpolioLink"  style={{color:'white'}} href="#">Portofolio<span className="sr-only">(current)</span></a>
                      <div className="dropdown-menu block bg_polio" aria-labelledby="navbarDropdownMenuLink">
                        <div classNameName="card-body">
                            <div classNameName="row">
                              <div classNameName="col-4">
                                <div style={{backgroundColor:"rgba(255,255,255,.6)"}}>
                                    <h3>Portofolio</h3>
                                    <p>is a good project of my portofolio</p>
                                </div>
                              </div>
                              <div classNameName="col-4">
                                <Link classNameName="dropdown-item pdropdownitem "  to="/portofolio"><p style={{color:'#003b46',fontWeight: 'bold',}} >React.js</p></Link>
                                <Link classNameName="dropdown-item"  to="/portofolio"><p style={{color:'#003b46',fontWeight: 'bold',}} >React native</p></Link>
                                <Link classNameName="dropdown-item"  to="/portofolio"><p style={{color:'#003b46',fontWeight: 'bold',}} >Vue.js</p></Link>
                                <Link classNameName="dropdown-item h-25"  to="/portofolio"><p style={{color:'#003b46',fontWeight: 'bold',}} >Electron.js</p></Link>
                              </div>
                              <div classNameName="col-4">
                                  <a className="dropdown-item" href="#" >Angular</a>
                                  <a className="dropdown-item" href="#">Django</a>
                                  <a className="dropdown-item" href="#">Flutter</a>
                                  <a className="dropdown-item" href="#">Kotlin AS</a>
                              </div>
                            </div>
                            
                        </div>
                      </div>
                    </li>   
                  </ul>    
              </div>
                  </li>
                  <li className="nav-item">
                  <div className="collapse navbar-collapse justify-content-end w-100 order-3" id="navbar-list-9">
                  <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                      <a className="nav-link"  id="navbarsocialMedia"  style={{color:'white'}} href="#">Social Media<span className="sr-only">(current)</span></a>
                      <div className="dropdown-menu block bg_scm" aria-labelledby="navbarDropdownMenuLink">
                        <div classNameName="card-body">
                            <div classNameName="row">
                              <div classNameName="col-4">
                                <div style={{backgroundColor:"rgba(255,255,255,.6)"}}>
                                    <h3>My Social Media</h3>
                                    <p>my socail media you can visit or follow</p>
                                </div>
                              </div>
                              <div classNameName="col-4">
                                  <a className="dropdown-item" href="#">Twitter</a>
                                  <a className="dropdown-item" href="#">Facebook</a>
                                  <a className="dropdown-item" href="#">Instagram</a>
                              </div>
                              <div classNameName="col-4">
                                  <a className="dropdown-item" href="#">Whatapps</a>
                                  <a className="dropdown-item" href="#">Telegram</a>
                              </div>
                            </div>
                            
                        </div>
                      </div>
                    </li>   
                  </ul>    
              </div>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to={this.state.ContactUrl}><p style={{color:'white'}} >Contact</p></Link>
                  </li>
                </ul>
              </div>
            </nav>
        );
    }
 }
 export default NavHader;