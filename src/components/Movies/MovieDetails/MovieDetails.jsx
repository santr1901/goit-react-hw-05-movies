import { getDetails } from 'service';
import { useState, useEffect } from 'react';

const MovieDetails = ({ id }) => {
  const [movieData, setMovieData] = useState([]);
  console.log(id);

  getDetails(id).then(response => console.log(response));

  return (
    <div>
      <img></img>
      <h2></h2>
      <p></p>
      <h3>Overview</h3>
      <p></p>
      <h4>Genres</h4>
      <p></p>
    </div>
  );
};

export default MovieDetails;
