import { getTrending } from 'service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import MovieDetails from 'Pages/MovieDetails/MovieDetails';

const Home = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    getTrending().then(response => {
      const allNames = response.map(movie => ({
        id: movie.id,
        name: movie.name || movie.title,
      }));
      setNames([...allNames]);
    });
  }, []);

  const addTrandingList = () => {
    return names.map(movie => (
      <li key={movie.id}>
        <Link exact="true" to={`/Movies/${movie.id}`}>
          {movie.name}
        </Link>
      </li>
    ));
  };

  return (
    <div>
      <h3>Trending today</h3>
      <ul>{addTrandingList()}</ul>
    </div>
  );
};

export default Home;
