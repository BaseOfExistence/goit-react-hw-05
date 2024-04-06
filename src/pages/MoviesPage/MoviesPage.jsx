import { useState } from "react"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { searchData } from "../../backEndAPI"
import MovieList from "../../components/MovieList/MovieList"
import Error from "../../components/Error/Error"
import css from "./MoviesPage.module.css"

export default function MoviesPage() {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("query")
    const [searchQuery, setSearchQuery] = useState('')
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        if (query) {
            const getMovies = async () => {
                try {
                    setIsError(false)
                    const data = await searchData(query)
                    setMovies(data)
                } catch (error) {
                    setIsError(true)
                }
            }
            getMovies()
        }
    }, [query])
    const changeQuery = query => {
        setSearchParams({ query });
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (searchQuery === '') {
            alert('Empty query!');
        }
        changeQuery(searchQuery);
        setSearchQuery('')
    }
    const onChangeValue = (event) => {
        const { value } = event.target
        setSearchQuery(value)
    }

    return (
        <>
            {isError && <Error />}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    className={css.formItem}
                    value={searchQuery}
                    onChange={onChangeValue}
                />
                <button type="submit" className={css.formItem}>Search</button>
            </form>
            {movies.length !== 0 && <MovieList movies={movies} />}
        </>
    );
}