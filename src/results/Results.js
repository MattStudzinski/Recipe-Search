import "./Results.css"
import React from 'react';
import { Link } from 'react-router-dom';
import Details from "../details/Details";




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
            <Link to={'/details/'+ label}>Recipe Details</Link>
            
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

