import { getDetails } from 'service';
import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import MoviePage from 'components/MoviePage/MoviePage';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/movies';

  useEffect(() => {
    getDetails(id).then(response => {
      const allData = {
        id: response.id,
        title: response.title,
        score: response.vote_average,
        poster: `https://image.tmdb.org/t/p/w500${response.poster_path}`,
        overview: response.overview,
        genres: response.genres.map(genre => genre.name),
      };
      setData(allData);
    });
  }, [id]);

  return (
    <div>
      <button className={css.back_btn} onClick={() => navigate(from)}>
        GO BACK
      </button>
      <MoviePage movieInfo={data} />
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
