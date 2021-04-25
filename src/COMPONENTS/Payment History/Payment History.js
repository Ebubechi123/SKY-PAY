import React from 'react';
import Title from '../Title/Title';
import Button from "../Button/Button"
import "./Payment History.css";

const History = () => {
    return (  
        <>
       <div className="History_Container">
           <div className="History_Content">
               <Title title="History" />

               <div className="history-mainContent">
                   <div className="history-tabs">
                       <div className="history-description"><p>You Paid #500 for faculty dues at 12/02/2017</p></div>
                       <div className="history-button"><Button className="history-btn">View</Button></div>
                   </div>
               </div>
           </div>
       </div>
        </>
    );
}
 
export default History;