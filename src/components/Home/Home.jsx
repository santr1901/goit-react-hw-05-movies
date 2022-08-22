import { getTrending } from 'service';
import { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import MovieDetails from 'components/Movies/MovieDetails/MovieDetails';

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

  return (
    <div>
      <h3>Trending today</h3>
      <ul>
        {names.map(movie => (
          <li key={movie.id}>
            {/* {console.log(movie.id)} */}
            <Link to={`/Movies/${movie.id}`}>{movie.name}</Link>
            <Routes>
              <Route
                path={`/Movies/${movie.id}`}
                element={<MovieDetails id={movie.id} />}
              />
            </Routes>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
