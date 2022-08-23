import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <form>
        <input placeholder="input movie name"></input>
        <button>Search</button>
      </form>
      <Outlet />
    </div>
  );
};

export default Movies;
