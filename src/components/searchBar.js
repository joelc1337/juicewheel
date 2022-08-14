import React, {useState} from 'react';
import './component_styles/SearchBar.css'

function SearchBar(){


    const [ingredientList, setList] = useState([]);




    function ingredientSearch(){
        


    }
    
    return(
        <div  id="searchWrapper" className="text-center m-3 row align-center justify-content-center">
           <input className="text-center" placeholder="Ingredient Search" type="text"></input>
           {/* <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button> */}
        </div>
    )


}

export default SearchBar;