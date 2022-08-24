import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getCast } from 'service';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id).then(response => {
      const allActors = response.cast.map(actor => ({
        name: actor.name,
        character: actor.character,
        photo: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
      }));
      setCast(allActors);
    });
  }, [id]);

  const showCast = () => {
    return cast.map(actor => (
      <li key={actor.name}>
        <hr />
        <img
          width="70px"
          height="100px"
          alt={actor.name}
          src={actor.photo}
        ></img>
        <p>{actor.name}</p>
        <p>Character: {actor.character}</p>
      </li>
    ));
  };
  return <ul>{showCast()}</ul>;
};

export default Cast;
