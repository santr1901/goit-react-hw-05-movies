import { getDetails } from 'service';
import { useState, useEffect } from 'react';
import css from './MovieDetails.module.css';

const MovieDetails = ({ id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    getDetails(id).then(response => {
      console.log(response);
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
    <div className={css.movie_details}>
      <img
        width="200px"
        height="300px"
        alt={`${title}`}
        src={`${poster}`}
      ></img>
      <div>
        <h2>{title}</h2>
        <p>User score: {score}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres} </p>
      </div>
    </div>
  );
};

export default MovieDetails;
