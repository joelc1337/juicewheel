    
import './foodCard.css';


function foodCard(props){
    return(
        <div id="foodCard" className={props.className}>
            <button>
                <img src={`ingredientAssets/${props.fruit}.jpg`}/>
            </button>
            <h6 className="text-center">{props.fruit}</h6>
        </div>
    )
}


export default foodCard;