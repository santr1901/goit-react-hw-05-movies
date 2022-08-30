// import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovie } from 'service';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const searchName = searchParams.get('search') ?? '';

  useEffect(() => {
    if (searchName === '') {
      return;
    }
    try {
      searchMovie(searchName).then(response => {
        const Results = response.results.map(movie => ({
          id: movie.id,
          name: movie.name || movie.title,
        }));
        setSearchedMovies([...Results]);
      });
    } catch (error) {
      return console.log(error);
    }
  }, [searchName]);

  const changeSearch = search => {
    setSearchParams({ search });
  };
  const addSearchedMovies = () => {
    return searchedMovies.map(movie => (
      <li key={movie.id}>
        <Link state={{ from: location }} to={`/movies/${movie.id}`}>
          {movie.name}
        </Link>
      </li>
    ));
  };

  return (
    <div>
      <SearchForm onSubmit={changeSearch} />

      <ul>{addSearchedMovies()}</ul>
    </div>
  );
};

export default Movies;
