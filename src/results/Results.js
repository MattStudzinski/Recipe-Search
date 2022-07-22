import "./Results.css"
import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Details from '../details/Details';



const Recipe = ({recipe}) => {
    const {label,image,url,ingredients,} = recipe.recipe 
    
    return (
        <div className='recipe'>
            <h2 className='recipe-title'>{label}</h2>
            <img className='food-image' src={image} alt= {label}/>
            <a className='link' href={url} target= "_blank" rel='noopener noreferrer'>
                Recipe Instructions
            </a>

            
            <div className="more-detail">
            <Link to={'/details/'+label}>Recipe Details</Link>
            </div>
            
            
            <ul className='ingredient-list'>
                {ingredients.map((ingredient,index) => (
                    <li key={index}>{ingredient.text}</li>
                    
                    
                ))}
            </ul>
            
            
            
            
            
        </div>
    );
    
};



const Results = ({recipes}) => {

    return (
        
        <div className='recipes'>
        {recipes !== [] && recipes.map((recipe,index) => <Recipe key={index} recipe={recipe} /> )}
        
        
        
        </div>
    );
    
};


export default Results;

// this will have JS because this is what appears on click, we need to look through the API and populate this area with the results of that search, this will be done by pushing the handle click in to here(i think) and then looping through the array for the results that meet the searches needs