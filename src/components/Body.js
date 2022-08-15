import React, {useState} from 'react';
import SearchContext from './SearchContext';



function Body(props){

    const {searchText, setSearchText} = useState("");
    const states = {searchText,setSearchText};
    
    return(
        <SearchContext.Provider value={states}>
            <div className="container-fluid">{props.children}</div>
        </SearchContext.Provider>
    )
}

export default Body;