import React,{Component} from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'

class NavHader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open:false,
        toUrl:"/",
        toUrl1:"/menu"
    };
  }
  openNavMobile=()=>{
        if(this.state.open===false){
            this.setState({open:true})
        }else{
            this.setState({open:false})
        }
    }
    render() {
      console.log(this.state.open)
      let{toUrl,toUrl1,open}=this.state
        return(
            <nav class="navbar navbar-light bg-info navbar-expand-lg justify-content-between" id="bgnav1">
                <button class="navbar-toggler order-2" type="button" data-toggle="collapse" data-target="#navbar-list-9" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={this.openNavMobile}>
                    <Link to={!open?toUrl1:toUrl} >
                        <span class="navbar-toggler-icon"></span>
                    </Link>
                  </button>
                <a class="navbar-brand mx-lg-0 order-1 order-lg-2" href="#">
                    <img src={require('../../assets/icons/mini2.png')} style={{marginRight:'5px'}} width="40" height="40" alt="logo"/>
                    AsepPortofolio
                </a>
                <div class="collapse navbar-collapse w-100 order-3 order-lg-1" id="navbar-list-9">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <Link class="nav-link" to="/"><p style={{color:'white'}}>Home</p></Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/profile"><p  style={{color:'white'}}>Profile</p></Link>
                  </li>
                  <li class="nav-item">
                  <div class="collapse navbar-collapse justify-content-end w-100 order-3" id="navbar-list-9">
                  <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                      <a class="nav-link"  id="navbarpolioLink"  style={{color:'white'}} href="#">Portofolio<span class="sr-only">(current)</span></a>
                      <div class="dropdown-menu block bg_polio" aria-labelledby="navbarDropdownMenuLink">
                        <div className="card-body">
                            <div className="row">
                              <div className="col-4">
                                <div style={{backgroundColor:"rgba(255,255,255,.6)"}}>
                                    <h3>Portofolio</h3>
                                    <p>is a good project of my portofolio</p>
                                </div>
                              </div>
                              <div className="col-4">
                                <Link className="dropdown-item pdropdownitem "  to="/portofolio"><p style={{color:'#003b46',fontWeight: 'bold',}}>React.js</p></Link>
                                <Link className="dropdown-item"  to="/portofolio"><p style={{color:'#003b46',fontWeight: 'bold',}}>React native</p></Link>
                                <Link className="dropdown-item"  to="/portofolio"><p style={{color:'#003b46',fontWeight: 'bold',}}>Vue.js</p></Link>
                                <Link className="dropdown-item h-25"  to="/portofolio"><p style={{color:'#003b46',fontWeight: 'bold',}}>Electron.js</p></Link>
                              </div>
                              <div className="col-4">
                                  <a class="dropdown-item" href="#">Angular</a>
                                  <a class="dropdown-item" href="#">Django</a>
                                  <a class="dropdown-item" href="#">Flutter</a>
                                  <a class="dropdown-item" href="#">Kotlin AS</a>
                              </div>
                            </div>
                            
                        </div>
                      </div>
                    </li>   
                  </ul>    
              </div>
                  </li>
                  <li class="nav-item">
                  <div class="collapse navbar-collapse justify-content-end w-100 order-3" id="navbar-list-9">
                  <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                      <a class="nav-link"  id="navbarsocialMedia"  style={{color:'white'}} href="#">Social Media<span class="sr-only">(current)</span></a>
                      <div class="dropdown-menu block bg_scm" aria-labelledby="navbarDropdownMenuLink">
                        <div className="card-body">
                            <div className="row">
                              <div className="col-4">
                                <div style={{backgroundColor:"rgba(255,255,255,.6)"}}>
                                    <h3>My Social Media</h3>
                                    <p>my socail media you can visit or follow</p>
                                </div>
                              </div>
                              <div className="col-4">
                                  <a class="dropdown-item" href="#">Twitter</a>
                                  <a class="dropdown-item" href="#">Facebook</a>
                                  <a class="dropdown-item" href="#">Instagram</a>
                              </div>
                              <div className="col-4">
                                  <a class="dropdown-item" href="#">Whatapps</a>
                                  <a class="dropdown-item" href="#">Telegram</a>
                              </div>
                            </div>
                            
                        </div>
                      </div>
                    </li>   
                  </ul>    
              </div>
                  </li>
                  <li class="nav-item">
                  <Link className="nav-link" to="/contact"><p style={{color:'white'}}>Contact</p></Link>
                  </li>
                </ul>
              </div>
            </nav>
        );
    }
 }
 export default NavHader;