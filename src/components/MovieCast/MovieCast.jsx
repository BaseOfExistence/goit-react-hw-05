import css from "./MovieCast.module.css"
import { creditsData } from "../../backEndAPI"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Error from "../../components/Error/Error"


export default function MovieCast() {
    const [credits, setCredits] = useState([])
    const [isError, setIsError] = useState(false)
    const [actorData, setActorData] = useState("")
    const { moviesId } = useParams()
    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsError(false)
                const data = await creditsData(moviesId)
                setCredits(data)
                setActorData(credits.cast.map((item) => {
                    const imageUrl = `https://image.tmdb.org/t/p/w500${item.profile_path}`
                    return (
                        <li className={css.actorInfo} key={item.id}>
                            <img className={css.actorPhoto} src={imageUrl} alt="Actor's photo" />
                            <p>Name: {item.name}</p>
                            <p>Character: {item.character}</p>
                        </li>
                    )
                }))
            } catch (error) {
                setIsError(true)
            }
        }
        getMovies()
    }, [moviesId, credits])


    return (
        <>
            {isError && <Error />}
            {credits.length === 0 ? <p>We don&#39;t have any credits for this movie</p> :
                <ul>
                    {actorData}
                </ul>
            }
        </>
    )
}