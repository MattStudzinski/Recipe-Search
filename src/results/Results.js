import "./Results.module.css"
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Details from "../details/Details";
import classes from '../UI/Card.module.css'
import Card from "../UI/Card";





const Recipe = ({recipe}) => {

    const [show,setShow] = useState(false)
    const {label,image,url,ingredients,} = recipe.recipe 
    
    return (
        <Card className= {classes.recipe}>
            <h2>{label}</h2>
            <img src={image} alt= {label}/>
            <a href={url} target= "_blank" rel='noopener noreferrer'>
                Recipe Instructions
            </a>
            
            <ul>
                {ingredients.map((ingredient,index) => (
                    <li key={index}>{ingredient.text}</li>
                    
                    
                ))}
            </ul>
            <button onClick={() => setShow(!show)}>More details</button>
            {show && <Details recipe={recipe}/>}
            
            
            
            
        </Card>
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
