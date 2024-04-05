import css from "./AdditionalInformation.module.css"
import { Link } from "react-router-dom"

export default function AdditionalInformation() {
    return (
        <div className={css.dopInfo}>
            <p>Additional information</p>
            <ul className={css.dopLinks}>
                <li>
                    <Link to={"cast"}>Cast</Link>
                </li>
                <li>
                    <Link to={"reviews"}>Reviews</Link>
                </li>
            </ul>
        </div>
    )
}