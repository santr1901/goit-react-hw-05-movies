import { Link } from 'react-router-dom';
import css from './MoviePage.module.css';

const MoviePage = ({ movieInfo }) => {
  const { title, poster, score, overview, genres } = movieInfo;
  return (
    <>
      <div className={css.movie_page}>
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
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MoviePage;
