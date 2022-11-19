
import Home from './Home';
import Axios from 'axios';
import React, { useState } from 'react'
import {Routes, Route,} from 'react-router-dom'
import Details from './details/Details';



function App() {
  const [search, setSearch] = useState("")
  const [recipes, setRecipes] = useState([])

  const APP_ID ='bb0a04fb'
  
  const url1 =`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&to=20`

  // function getapi () {
  
  //   fetch (url1)
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then((data) => {
  //     console.log(data)
  //     setSearch("")
  //     setRecipes(data.hits)
  //     console.log(recipes)
      
  //   })
  // }

  const getapi = async() => {
    const result = await Axios.get(url1)
    setRecipes(result.data.hits)
    console.log(result)
    setSearch('')
  }
    


  return (
    <div className="App">
      
      <nav>

      
      </nav>
      <main>
      <Routes>
      
      <Route path="*" element={<Home search={search} getapi={getapi} setSearch={setSearch} recipes={recipes} />} />
      
      
      </Routes>

      </main>

      
      
    </div>
  );
}

export default App;


