import './App.css';
import Details from './details/Details';
import Results from './results/Results';
import Search from './search/Search';
import Sidebar from './sidebar/Sidebar';
import React, {useEffect, useState} from 'react'

function App() {

  const APP_ID ='bb0a04fb'
  const API_KEY ='a3373011db3d5cb902adb61da213a1cb'
  
  useEffect(() => {
    const url1 =`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`
    fetch (url1)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
    })
  })

  
  
  

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
