import { useState } from "react"
import { trendingData } from "../../backEndAPI"
import { useEffect } from "react"
import Error from "../../components/Error/Error"
import MovieList from "../../components/MovieList/MovieList"

export default function Home() {
    const [movies, setMovies] = useState([])
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsError(false)
                const data = await trendingData()
                setMovies(data)
            } catch (error) {
                setIsError(true)
            }
        }
        getMovies()
    }, [movies])
    return (
        <>
            {isError && <Error />}
            <h1>Trending today</h1>
            <MovieList movies={movies} />
        </>
    )
}