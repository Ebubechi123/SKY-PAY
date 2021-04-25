import React from 'react';
import PaymentCard from "../COMPONENTS/Payment Card/PaymentCard";
import { Route } from "react-router-dom";
import  Tab  from "../COMPONENTS/Tabs/Tab";
import Main from '../COMPONENTS/Main/Main';
import History from '../COMPONENTS/Payment History/Payment History';
import Settings from '../COMPONENTS/Settings/Settings';
import Profile from '../COMPONENTS/Profile/Profile'


const Routes = () => {
    return ( 
        <>
        <Route exact={true} path="/" component={ Main } />
        <Route exact={true} path="/PaymentCard" component={PaymentCard} />
        <Route exact={true} path="/PaymentHistory" component={History} />
        <Route exact={true} path="/Settings" component={Settings} />
        <Route exact={true} path="/Profile" component={Profile} />
        </>
     );
}
 
export default Routes;