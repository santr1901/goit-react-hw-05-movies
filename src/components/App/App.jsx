import { Routes, Route } from 'react-router-dom';
import Movies from 'Pages/Movies/Movies';
import Home from 'Pages/Home/Home';
import Menu from './Menu/Menu';
import Cast from 'Pages/MovieDetails/Cast/Cast';
import Reviews from 'Pages/MovieDetails/Reviews/Reviews';
// import { useState } from 'react';

// import css from './App.module.css';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';

const App = () => {
  // const [id, setId] = useState();

  return (
    <div>
      <Menu />

      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/Movies" exact="true" element={<Movies />} />
        <Route path="/Movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>

        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
