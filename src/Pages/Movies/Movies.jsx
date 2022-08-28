// import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { searchMovie } from 'service';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchName = searchParams.get('query') ?? '';

  const handleSubmit = event => {
    event.preventDefault();
    searchMovie(searchName).then(response => {
      const Results = response.results.map(movie => ({
        id: movie.id,
        name: movie.name || movie.title,
      }));
      setSearchedMovies([...Results]);
    });
    setSearchParams('');
  };

  const handleChangeName = event => {
    setSearchParams({ query: event.currentTarget.value.toLowerCase() });
  };

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
