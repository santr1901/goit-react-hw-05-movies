import axios from 'axios';

const API_KEY = '4167a3621086eb019767740c5538e3e4';

export async function getTrending() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  const { data } = response;

  return data.results;
}

export async function getDetails(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  return response.data;
}

export async function getCast(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
}

export async function getReviews(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data;
}

export async function searchMovie(movieName) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`
  );

  return response.data;
}
