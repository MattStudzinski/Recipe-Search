import "./Search.css"
const Search = ({handleChange, handleSubmit, search}) => {
    


   
    
    return (
        <form onSubmit={handleSubmit} className="search-form">
            <label className="finder" htmlFor='ingredients'>Search any ingredient!</label>
            <input  
            autoComplete="off"
            className="input"
            placeholder= "Ingredients" 
            id="ingredients" 
            type="ingredients"
            onChange={handleChange}
            value= {search}
            

            />
            <button className="go" type='submit'>Find recipes!</button>
        </form>
    
    );
};

export default Search;

