import MovieList from './components/MovieList';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <MovieList/>

        <Routes>
        <Route path="*" component={MovieList} />
        
        </Routes>
      </Router>

     
    </div>
  );
}
export default App;
