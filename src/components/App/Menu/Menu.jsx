import { NavLink } from 'react-router-dom';
import css from './Menu.module.css';

const Menu = () => {
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
    </div>
  );
};

export default Menu;
