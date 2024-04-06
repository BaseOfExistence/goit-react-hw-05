import css from "./MovieReviews.module.css"
import { reviewsData } from "../../backEndAPI"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import Error from "../../components/Error/Error"

export default function MovieReviews() {
    const [reviews, setReviews] = useState([])
    const [isError, setIsError] = useState(false)
    const { moviesId } = useParams()
    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsError(false)
                const data = await reviewsData(moviesId)
                setReviews(data)
            } catch (error) {
                setIsError(true)
            }
        }
        getMovies()
    }, [moviesId])
    return (
        <>
            {isError && <Error />}
            
            {reviews.length === 0 ? <p>We don&#39;t have any reviews for this movie</p> :
            <ul className={css.reviews}>
                {reviews.map((item) => {
                    return (
                        <li key={item.id}>
                            <h4>Author: {item.author}</h4>
                            <p>{item.content}</p>
                        </li>
                    )
                })}
            </ul>
            }
            
        </>
    )
}