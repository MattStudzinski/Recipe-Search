
import Home from './Home';

import React, { useState } from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Details from './details/Details';



function App() {
  const [search, setSearch] = useState("")
  const [recipes, setRecipes] = useState([])

  const APP_ID ='bb0a04fb'
  
  
  function getapi () {
    const url1 =`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&to=20`
    fetch (url1)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      setSearch("")
      setRecipes(data.hits)
      console.log(recipes)
      
    })
  }
    


  return (
    <div className="App">
      
      <nav>
      <Link to="/home">
      <h5>Return to search</h5>
      </Link>
      
      </nav>
      <main>
      <Routes>
        
      <Route path="/home" element={<Home search={search} getapi={getapi} setSearch={setSearch} recipes={recipes} />} />
      <Route path="/details/:chosen_recipe" element= {<Details recipes={recipes}/>}/>
      
      </Routes>

      
      
      

      </main>

      
      
    </div>
  );
}

export default App;


/* this is where the results will pop up, this will need to change multiple times with each search, not sure how to do this but will work on it. this will also maybe have no js, dont think it needs any. */
