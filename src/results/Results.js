import "./Results.css"
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Details from "../details/Details";






const Recipe = ({recipe}) => {

    const [show,setShow] = useState(false)
    const {label,image,url,ingredients,} = recipe.recipe 
    
    return (
        <div className='recipe'>
            <h2 className='recipe-title'>{label}</h2>
            <img className='food-image' src={image} alt= {label}/>
            <a className='link' href={url} target= "_blank" rel='noopener noreferrer'>
                Recipe Instructions
            </a>
            
            <ul className='ingredient-list'>
                {ingredients.map((ingredient,index) => (
                    <li className="list" key={index}>{ingredient.text}</li>
                    
                    
                ))}
            </ul>
            <button onClick={() => setShow(!show)}>More details</button>
            {show && <Details recipe={recipe}/>}
            
            
            
            
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

