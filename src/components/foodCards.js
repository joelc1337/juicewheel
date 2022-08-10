import { render } from '@testing-library/react';
import FoodCard from './foodCard';



const ingredientList = ['banana','beet','bitter melon','blueberry','carrot','celery','cucumber','ginger','grapes','green apple','honeydew','kale','lemon','mango','orange','papaya','peanut butter','pineapple','protein','spinach','spirulina','strawberry','vitaminc','watermelon'];
function ingredientCardWrapper(props){

    let foodList = [];
    for(var i in ingredientList){
        foodList.push(<FoodCard className="col-xs-4" fruit= {ingredientList[i]}/>)
    }
    return foodList


}

export default ingredientCardWrapper;