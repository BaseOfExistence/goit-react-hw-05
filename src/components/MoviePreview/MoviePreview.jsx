import css from "./MoviePreview.module.css"

export default function MoviePreview({ movie, movieGenres }) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const getYear = () => new Date(movie.release_date).getFullYear()
    return (
        <div className={css.container}>
            <img className={css.poster} src={imageUrl} alt="Movie poster" />
            <div className={css.itemsContainer}>
                <h2>{movie.title} ({getYear()})</h2>
                <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h4>Genres</h4>
                <ul className={css.genres}>
                    {movieGenres}
                </ul>
            </div>
        </div>
    )
}