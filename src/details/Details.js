import './Details.css'
import React from 'react';
import {useParams} from 'react-router-dom'

const Details = ({recipes}) => {

const {index} = useParams()

// recipes.label.index using .find

    return (
        <div className='more-details'>
            <p>more detils here </p>
        </div>
    )
};

export default Details;