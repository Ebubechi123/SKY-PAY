import React,{useState} from 'react';
import Card from '../Card/Card';
import Search from '../Search/Search';
import  "./PaymentCard.css";
import Title from "../Title/Title"




const PaymentCard = () => {

    const[showSearch,setshowSearch] = useState(false);
    //EVENTS
         const ShowSearch=(e)=>{
        if(e.target.value==="All"){
           // NOTHING IS HAPPENING HERE
        }
        else{
            setshowSearch(!showSearch)
        }
    }

    return ( 
        <>
        <div className="paymentCard-Container">
            <div className="paymentCard-Title">
            <Title title="Payment Cards" />
            </div>
        {/* <div onChange={ShowSearch} className="optionsContainer">
            <select name="" id="" >
                <option value="All">All</option>
                <option value="Search Based On Dates">Search Based On Dates</option>
                <option value="Dates 2">Dates 2</option>
                <option value="Dates 3">Dates 3</option>
            </select>
        </div> */}
            <div className="carousel-container">
             <div className="card-container">
                <Card text="Pay"/>
                <Card text="Pay"/>
                <Card text="Pay"/>
                <Card text="Pay"/>
                  </div>
            </div>
        </div>

        <Search showSearch={showSearch} ShowSearch={ShowSearch} />
        </>
     );
}
 
export default PaymentCard;