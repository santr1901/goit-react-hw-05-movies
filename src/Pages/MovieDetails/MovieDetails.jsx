import { getDetails } from 'service';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

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

  const { title, score, poster, overview, genres } = data;
  return (
    <div>
      <button className={css.back_btn} onClick={() => navigate(-1)}>
        GO BACK
      </button>

      <div className={css.movie_details}>
        <img
          width="200px"
          height="300px"
          alt={`${title}`}
          src={`${poster}`}
        ></img>
        <div className={css.movie_info}>
          <h2>{title}</h2>
          <p>User score: {score}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{`${genres}`}</p>
        </div>
      </div>
      <div>
        <hr />
        <h3>Additional information</h3>
        <ul>
          <li>
            {' '}
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
