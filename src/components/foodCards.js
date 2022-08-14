import { render } from '@testing-library/react';
import FoodCard from './foodCard';



const ingredientList = ['banana','beet','bitter melon','blueberry','carrot','celery','cucumber','ginger','grapes','green apple','honeydew','kale','lemon','mango','orange','papaya','peanut butter','pineapple','protein','spinach','spirulina','strawberry','vitaminc','watermelon'];
function ingredientCardWrapper(props){

    let foodList = [];
    for(var i in ingredientList){
        foodList.push(<FoodCard key={ingredientList[i]} className="col-xs-4" fruit= {ingredientList[i]}/>)
    }
    return <div className="row text-center m-3 align-center justify-content-center">{foodList}</div>


}

export default ingredientCardWrapper;