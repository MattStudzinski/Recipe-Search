
import Home from './Home';
import Results from './results/Results';
import Search from './search/Search';
import Sidebar from './sidebar/Sidebar';
import React, { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'



function App() {
  const [search, setSearch] = useState("")
  const [recipes, setRecipes] = useState([])

  const APP_ID ='bb0a04fb'
  const API_KEY ='a3373011db3d5cb902adb61da213a1cb'
  
  function getapi () {
    const url1 =`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}`
    fetch (url1)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      setSearch("")
      setRecipes(data.hits)
      
    })
  }
    

    const handleChange = (event) => {
        setSearch(event.target.value)

    }

    

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(search)
        getapi()

    }

  return (
    <div className="App">
      
      <nav>
      <Link to="/">
      <h5>back to search</h5>
      </Link>
      
      </nav>
      <main>
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>

      <Search
      handleChange= {handleChange}
      handleSubmit= {handleSubmit}
      search= {search} />
      <Results 
      recipes={recipes}/>
      <Sidebar
      search={search}
      setSearch={setSearch}/>

      </main>

      
      
    </div>
  );
}

export default App;


/* this is where the results will pop up, this will need to change multiple times with each search, not sure how to do this but will work on it. this will also maybe have no js, dont think it needs any. */
