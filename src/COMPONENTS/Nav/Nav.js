import React from 'react';
import {Link} from "react-router-dom"
import "./Nav.css"
import ProfileImage from "../Profile/ProfileImage"
const Nav = () => {
    return ( 
        <>
  
        <div className="nav">
                <nav>
                    <div className="logo"><h1>Sky-Pay</h1></div>
                    <div className="profile_pic">
                       <Link to="/profile"> <ProfileImage /></Link>
                    </div>
                </nav>
            </div>
        </>
     );
}
 
export default Nav;



 