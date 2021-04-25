import React,{createContext,useState} from 'react';

export const userNameContext = createContext();

export const UserNameProvider =(props)=>{

    const [userName,setUserName] = useState("EBUBECHI");

return(

<userNameContext.Provider value={[userName,setUserName]}>
    {props.children}
</userNameContext.Provider>

)
}
