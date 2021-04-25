import React,{useState} from 'react';
import  "./ProfileImage.css"
import DefaultImage from "../../assets/account.png";

const ProfileImage = ({style}) => {
    const [profileImage,setProfileImage] = useState(DefaultImage)
    return ( 
        <>
        <img style={style} src={profileImage} alt="profile-img"/>
        </>
     );
}
 
export default ProfileImage;