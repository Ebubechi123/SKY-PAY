import React from 'react';
import "./Card.css";
import Button from '../Button/Button';
const Card = ({text}) => {
    return ( 
        <>
          <div className="card">
                     <div className="title"><h5>Payment For Faculty Dues</h5></div>
                     <p className="date">Date:12/4/2019</p>
                     <Button>{text}</Button>
                 </div>
        </>
     );
}
 
export default Card;