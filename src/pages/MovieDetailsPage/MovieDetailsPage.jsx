import { useState } from "react"
import { Link, useParams, Outlet, useLocation } from "react-router-dom"
import { movieData } from "../../backEndAPI"
import { useEffect } from "react"
import css from "./MovieDetailsPage.module.css"
import MoviePreview from "../../components/MoviePreview/MoviePreview"
import AdditionalInformation from "../../components/AdditionalInformation/AdditionalInformation"
import Error from "../../components/Error/Error"
import { FaArrowLeftLong } from "react-icons/fa6"

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState([])
    const [movieGenres, setMovieGenres] = useState("")
    const [isError, setIsError] = useState(false)
    const { moviesId } = useParams()
    const location = useLocation()
    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsError(false)
                const data = await movieData(moviesId)
                setMovie(data)
                setMovieGenres(movie.genres.map((genre) => {
                            return (
                                <li key={genre.id}>
                                    <p>{genre.name}</p>
                                </li>
                            )
                        }))
            } catch (error) {
                setIsError(true)
            }
        }
        getMovies()
    }, [moviesId, movie])
    
    return (
        <>
            {isError && <Error />}
            <Link className={css.goBack} to={location.state}><FaArrowLeftLong /><span>Go back</span></Link>
            <MoviePreview movie={movie} movieGenres={movieGenres} />
            <AdditionalInformation />
            <Outlet />
        </>
    )
}