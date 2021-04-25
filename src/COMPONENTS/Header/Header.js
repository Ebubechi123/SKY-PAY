import React from 'react';
import Button from '../Button/Button';
import ProfileImage from '../Profile/ProfileImage';
import UserName from '../UserName/UserName';
import './Header.css'

const Header = () => {
    return ( 
        <>
        <div className="header-wrapper">
           <header>
              <div className="hero">
                <div className="hero-title"> <h2>WELCOME </h2>   <UserName/></div>
               {/* <Button>Get Started</Button> */}
               <p style={{color:"white",fontSize:"12px"}}>THIS APP IS POWERED BY SKYNET ENGINE</p>
            </div>
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="rgb(0, 61, 194) " fillOpacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,218.7C840,235,960,213,1080,170.7C1200,128,1320,64,1380,32L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>

           </header>
      
        
        </div>
       
        </>
     );
}
 
export default Header;