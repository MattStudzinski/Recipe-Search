import React from 'react';
import Search from './search/Search';


const Home = ({search,setSearch,getapi}) => {

    const handleChange = (event) => {
        setSearch(event.target.value)

    }

    

    const handleSubmit = (event) => {
        event.preventDefault()
        getapi()

    }
    
    return (
        <div>
            <Search
            handleChange= {handleChange}
            handleSubmit= {handleSubmit}
            search= {search} />
        </div>
    );
};

export default Home;