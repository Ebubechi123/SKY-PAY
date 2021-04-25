import React,{useState,useContext} from 'react';
import  {userNameContext} from "../../State Management/store";


const UserName = () => {
    const [userName,setUserName] = useContext(userNameContext)

    return ( 
        <h2 style={{textTransform:"uppercase"}} > {userName}</h2>
     );
}
 
export default UserName;