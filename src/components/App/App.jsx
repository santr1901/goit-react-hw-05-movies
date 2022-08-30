import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Movies = lazy(() => import('Pages/Movies/Movies'));
const Home = lazy(() => import('Pages/Home/Home'));
const Menu = lazy(() => import('./Menu/Menu'));
const Cast = lazy(() => import('Pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('Pages/MovieDetails/Reviews/Reviews'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));

const App = () => {
  return (
    <div>
      <Menu />
      <Suspense fallback={<p>....Load page</p>}>
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/movies" exact="true" element={<Movies />} />

          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>

          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
