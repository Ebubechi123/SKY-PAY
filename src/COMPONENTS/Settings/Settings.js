import React,{useState} from 'react';
import {Link} from "react-router-dom" 
import Title from "../Title/Title";
import "./Settings.css"
const Settings = () => {
    return ( 
        <>
       <div className="settings-container">
       <Title title="Settings" />
       <div className="Settings-Main">
       <div className="settings-tab">
               <p>SYSTEM</p>
           </div>

      <Link to="/Profile"> 
            <div className="settings-tab">
               <p>PROFILE</p>
             </div>
     </Link>

       <div className="settings-tab">
               <p>ABOUT</p>
           </div>
       </div>
       </div>
        </>
     );
}
 
export default Settings;