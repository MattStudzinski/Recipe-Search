import './Details.css'
import React from 'react';
import {useParams} from 'react-router-dom'

const Details = ({recipes}) => {
//recipes is the fetch i get from search so my list
const {chosen_recipe} = useParams()
//chosen-recipe is the url change that happens when i click more details
// let match = recipes.find(rec => {
//     if(recipes.label.index === )
//     return match()
// })

// recipes.label.index using .find

    return (
        <div className='more-details'>
            <p>more detils here </p>
        </div>
    )
};

export default Details;

//i have to match this index to the same index of the 