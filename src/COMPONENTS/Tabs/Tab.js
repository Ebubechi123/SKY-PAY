import React from 'react';
import "./Tab.css";
import Credit from "../../assets/creditcard.png"
import History from "../../assets/history.png"
import Settings from "../../assets/settings.png";
import { Link } from "react-router-dom";
import Title from '../Title/Title';


const Tab = () => {
    return ( 
        <>
    <div className="tab-container">
        <div className="tab-title">
            <Title title="Tab" />
        </div>
        <div className="tab">
            <Link to="/PaymentCard">
            <div className="tab-1">
                <img src={Credit} alt="credit-card"/>
                <p className="title">Payment Card</p>
            </div>
            </Link>

           <Link to="/PaymentHistory" > <div className="tab-1">
                <img src={History} alt="credit-card"/>
                <p className="title">Payment History</p>
            </div>
            </Link>
           
            <Link to="/Settings">
            <div className="tab-1">
                <img src={Settings} alt="credit-card"/>
                <p className="title">Settings</p>
            </div>
            </Link>

        </div>
    </div>
    
        </>
     );
}
 
export default Tab;