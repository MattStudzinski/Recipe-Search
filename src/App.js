import './App.css';
import Search from './search/Search';
import Results from './results/Results';
import Details from './details/Details';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Search />
      <Results />
      <Details />
      <Sidebar />
    </div>
  );
}

export default App;


/* this is where the results will pop up, this will need to change multiple times with each search, not sure how to do this but will work on it. this will also maybe have no js, dont think it needs any. */
