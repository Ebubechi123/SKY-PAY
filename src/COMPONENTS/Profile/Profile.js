import React,{useState,useContext} from 'react';
import Title from "../Title/Title"
import ProfileImage from './ProfileImage';
import UserName from '../UserName/UserName';
import Button from '../Button/Button';
import { userNameContext } from "../../State Management/store";
import "./Profile.css";

const Profile = () => {

    const style={
        width:"200px",
        height:"200px"
    }

    const [input,setInput] = useState("");
    const [,setUserName] = useContext(userNameContext)

    //FUNCTIONS

    const InputHandler=(e)=>{
        setInput(e.target.value);
    }


    const SubmitHandler=()=>{
     setUserName(input)
    }


    return ( 
        <>
      <div className="profile-container">
        <Title title="PROFILE" />

        <div className="profile-image_container">
            <ProfileImage style={style} />
        </div>

        <div className="user_container">
            <UserName setInput={input} />
        </div>

        <div className="profile-editing-container">

           <form onSubmit={(e)=>{
               e.preventDefault();
               SubmitHandler()
           }}>

            <div className="userName">
            <label htmlFor="">UserName:</label>
               <input onChange={InputHandler} placeholder="UserName" type="text" value={input} name="" id=""required/>
            </div>
            <div className="ProilePic">
            <label htmlFor="">Profile Picture:</label>
              <input type="file" name="" id=""/>
            </div>

            <Button>EDIT</Button>
           </form>
        </div>
      </div>
        </>
     );
}
 
export default Profile;