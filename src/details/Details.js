import React from 'react';

const Details = ({ingredients}) => {
    return ingredients.map(ingredient => {
        return(
            <ul className='ingredient-list'>
                <li className='ingredient-text'>{ingredient.text}</li>
            </ul>
        )
    })
};


export default Details;

// contains the details after clicking on the result, no logic in here and will be accessed with a route i believe, mostly css after getting the data from API
