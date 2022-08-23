import { Routes, Route, NavLink } from 'react-router-dom';
import Movies from 'Pages/Movies/Movies';
import Home from 'Pages/Home/Home';

import css from './App.module.css';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';

const App = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) =>
            isActive ? `${css.activeLink}` : `${css.navigation_link}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Movies"
          className={({ isActive }) =>
            isActive ? `${css.activeLink}` : `${css.navigation_link}`
          }
        >
          Movies
        </NavLink>
      </nav>

      {/* <Link to={`/Movies/${movie.id}`}>{movie.name}</Link>
      <Routes>
        <Route
          path={`/Movies/${movie.id}`}
          element={<MovieDetails id={movie.id} />}
        />
      </Routes> */}

      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/Movies" exact="true" element={<Movies />}>
          <Route path="movieId" element={<MovieDetails />}>
            <Route path="cast"></Route>
            <Route path="reviews"></Route>
          </Route>
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
