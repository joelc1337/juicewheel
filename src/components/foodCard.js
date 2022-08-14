import React, {useState} from 'react';
import './component_styles/foodCard.css';


function FoodCard(props){

    const [selected, setSelected] = useState(false);




    return(
        <div id="foodCard" className={props.className + ' ' + (selected ? "green" : null)}>
            <button onClick={()=> setSelected(!selected)}>
                <img src={`ingredientAssets/${props.fruit}.jpg`}/>
            </button>
            <h6 className="text-center">{props.fruit}</h6>
        </div>
    )
}


export default FoodCard;