import React, {useState} from 'react';
import './SearchBar.css'

function SearchBar(){


    const [ingredientList, setList] = useState([]);




    function ingredientSearch(){



    }
    
    return(
        <div  id="searchWrapper" className="text-center">
           <input className="text-center" placeholder="Ingredient Search" type="text"></input>
           <button type="submit"></button>
        </div>
    )


}

export default SearchBar;