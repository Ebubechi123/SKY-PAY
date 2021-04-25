import React from 'react';
import Button from '../Button/Button';
import "./Search.css"
const Search = ({showSearch,ShowSearch}) => {
    return ( 
        <>
        <div className={showSearch ?   'search-container' : 'takeoffSearch' }>
            <div onClick={ShowSearch} className="close">X</div>
       <div className="search-Container">
       <input type="text"/>
        <Button >Search</Button>
       </div>

        </div>
        </>
     );
}
 
export default Search;