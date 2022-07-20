import React from 'react';


const Recipe = ({recipe}) => {
    const {label,image,url,ingredients} = recipe.recipe
    return (
        <div className='recipe'>
            <h2>{label}</h2>
            <img src={image} alt= {label}/>
            <a href={url} target= "_blank" rel='noopener noreferrer'>
                URL
            </a>
            <button>ingredients</button>
            
        </div>
    );
};



const Results = ({recipes}) => {
    return (
        <div className='recipes'>
        {recipes !== [] && recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/> )}
        
        
        </div>
    );
    
};


export default Results;

// this will have JS because this is what appears on click, we need to look through the API and populate this area with the results of that search, this will be done by pushing the handle click in to here(i think) and then looping through the array for the results that meet the searches needs