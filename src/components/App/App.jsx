import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
const Home = lazy(() => import("../../pages/Home/Home"))
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"))
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"))
import Navigation from "../Navigation/Navigation"
import MovieCast from "../MovieCast/MovieCast"
import MovieReviews from "../MovieReviews/MovieReviews"

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Routes>
    </Suspense>
  )
}


