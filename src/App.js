import './App.css';
import Details from './details/Details';
import Results from './results/Results';
import Search from './search/Search';
import Sidebar from './sidebar/Sidebar';
import React, {useEffect, useState} from 'react'

function App() {

 

  
  
  

  const initialState = {ingredients: ''}
    const [search, setSearch] = useState(initialState)
    

    const handleChange = (event) => {
        setSearch({...search, [event.target.id]: event.target.value})

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(search)
        setSearch(initialState)

    }

  return (
    <div className="App">
      <Search
      handleChange= {handleChange}
      handleSubmit= {handleSubmit}
      search= {search} />
      <Results />
      <Details />
      <Sidebar />
      
    </div>
  );
}

export default App;


/* this is where the results will pop up, this will need to change multiple times with each search, not sure how to do this but will work on it. this will also maybe have no js, dont think it needs any. */
