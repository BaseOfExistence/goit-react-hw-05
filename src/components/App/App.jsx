import Home from "../../pages/Home/Home"
import Header from "../Header/Header"
import MoviesPage from "../../pages/MoviesPage/MoviesPage"
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage"
import MovieCast from "../MovieCast/MovieCast"
import MovieReviews from "../MovieReviews/MovieReviews"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Routes>
    </>
  )
}


