import React from 'react';

const Details = ({recipe}) => {
    const {calories,cuisineType,mealType,cautions,dietLabels,totalTime} = recipe.recipe
    return (
        <div>
            <p className='calo'>Calories: {calories} </p>
             <p className='type'>Cuisine Type: {cuisineType}</p>
             <p className='mealType'>Meal Type: {mealType}</p>
             <p className='cautions'>Be wary of: {cautions}</p>
             <p className='diet'>Special diet needs: {dietLabels}</p>
             <p className='time'>Time to cook: {totalTime} minutes</p>
</div>
    );
};

export default Details;






// import './Details.css'
// import React, { useEffect, useState } from 'react';
// import {useParams} from 'react-router-dom'

// const Details = ({recipes}) => {
// const [foundRecipe, setFoundRecipe] = useState()

// const {chosen_recipe} = useParams()




// useEffect(()=> {
//     const findRecipe = (recipe) => {
//         return(
//         recipe.label=chosen_recipe
//         )
//     }
    
    
//     setFoundRecipe(recipes.find(findRecipe))
//     console.log(foundRecipe)
//     console.log(chosen_recipe)
// },[foundRecipe, recipes, chosen_recipe])




// if(!foundRecipe) {
//     return null
// }
//     return (
//         <div className='more-details'>
//             <img className='food-im' src={foundRecipe.recipe.image} alt= {foundRecipe.label}/>
//             <p className='calo'>Calories: {foundRecipe.recipe.calories} </p>
//             <p className='type'>Cuisine Type: {foundRecipe.recipe.cuisineType}</p>
//             <p className='mealType'>Meal Type: {foundRecipe.recipe.mealType}</p>
//             <p className='cautions'>Be wary of: {foundRecipe.recipe.cautions}</p>
//             <p className='diet'>Special diet needs: {foundRecipe.recipe.dietLabels}</p>
//             <p className='time'>Time to cook: {foundRecipe.recipe.totalTime} minutes</p>
//         </div>
//     )
// };

// export default Details;

 