import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <div>
      <Router>
        {/* <MovieList/> */}

        <Routes>
          <Route path="*" element={<Navigate to="/MovieList/"/>} />
          <Route path ='/MovieList' element={<MovieList/>}/>
          <Route path='/MovieDetails/:viewId'  element={<MovieDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
