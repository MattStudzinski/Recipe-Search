import './Details.css'
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const Details = ({recipes}) => {
const [foundRecipe, setFoundRecipe] = useState()
//recipes is the fetch i get from search so my list
const {chosen_recipe} = useParams()
//chosen-recipe is the url change that happens when i click more details

// })
const findRecipe = (recipe) => {
    return(
    recipe.label=chosen_recipe
    )
}
useEffect(()=> {
    setFoundRecipe(recipes.find(findRecipe))
},[recipes])

console.log(foundRecipe)
// recipes.label.index using .find
if(!foundRecipe) {
    return null
}
    return (
        <div className='more-details'>
            <img className='food-im' src={foundRecipe.recipe.image} alt= {foundRecipe.label}/>
            <p className='calo'>Calories: {foundRecipe.recipe.calories} </p>
            <p className='type'>Cuisine Type: {foundRecipe.recipe.cuisineType}</p>
            <p className='mealType'>Meal Type: {foundRecipe.recipe.mealType}</p>
            <p className='cautions'>Be wary of: {foundRecipe.recipe.cautions}</p>
            <p className='diet'>Special diet needs: {foundRecipe.recipe.dietLabels}</p>
            <p className='time'>Time to cook: {foundRecipe.recipe.totalTime} minutes</p>
        </div>
    )
};

export default Details;

//i have to match this index to the same index of the 