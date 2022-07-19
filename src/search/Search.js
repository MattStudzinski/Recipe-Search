
const Search = ({handleChange, handleSubmit, search}) => {
   
    
    return (
        <form onSubmit={handleSubmit} className="search-form">
            <label htmlFor='ingredients'>Find your next meal</label>
            <input  
            placeholder= "Search ingredients" 
            id="ingredients" 
            type="ingredients"
            onChange={handleChange}
            value={search.ingredients}
            />
            <button type='submit'>Lets get cooking!</button>
        </form>
    );
};

export default Search;

// this will have a form in it, that will also have event handlers to change the state of the application, state will be declaed in the app file though so it can be passed around the app 