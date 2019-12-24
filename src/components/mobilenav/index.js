import React from 'react';
import {Link} from 'react-router-dom';

function MobileNav() { 
    return(
        <div style={{flexDirection:'column',flex:1}} className="bgnav1" >
            <li class="nav-item active">
                <Link class="nav-link" to="/"><p style={{color:'black'}}>Home</p></Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/profile"><p  style={{color:'black'}}>Profile</p></Link>
            </li>
        </div>  
    );
}
export default MobileNav;