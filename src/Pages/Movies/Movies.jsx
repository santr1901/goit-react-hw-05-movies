// import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { searchMovie } from 'service';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchName, setSearchName] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    searchMovie(searchName).then(response => {
      const Results = response.results.map(movie => ({
        id: movie.id,
        name: movie.name || movie.title,
      }));
      setSearchedMovies([...Results]);
    });
  };

  const handleChangeName = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  console.log(searchedMovies);

  const addSearchedMovies = () => {
    return searchedMovies.map(movie => (
      <li key={movie.id}>
        <Link exact="true" to={`/Movies/${movie.id}`}>
          {movie.name}
        </Link>
      </li>
    ));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchName}
          onChange={handleChangeName}
          placeholder="input movie name"
        ></input>
        <button>Search</button>
      </form>
      <ul>{addSearchedMovies()}</ul>
    </div>
  );
};

export default Movies;
