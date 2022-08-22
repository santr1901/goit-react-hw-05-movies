import { Routes, Route, NavLink } from 'react-router-dom';
import Movies from 'components/Movies/Movies';
import Home from 'components/Home/Home';

import css from './App.module.css';

const App = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink className={css.navigation_item} to="/">
          Home
        </NavLink>
        <NavLink className={css.navigation_item} to="/Movies">
          Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
