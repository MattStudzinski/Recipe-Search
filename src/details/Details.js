import './Details.css'
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const Details = ({recipes}) => {
const [foundRecipe, setFoundRecipe] = useState()

const {chosen_recipe} = useParams()



const findRecipe = (recipe) => {
    return(
    recipe.label=chosen_recipe
    )
}
useEffect(()=> {
    setFoundRecipe(recipes.find(findRecipe))
},[recipes])

console.log(foundRecipe)

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

 