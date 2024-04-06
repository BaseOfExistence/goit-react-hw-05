import css from "./AdditionalInformation.module.css"
import { NavLink } from "react-router-dom"
import clsx from 'clsx'

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}

export default function AdditionalInformation() {
    return (
        <div className={css.dopInfo}>
            <p>Additional information</p>
            <ul className={css.dopLinks}>
                <li>
                    <NavLink to={"cast"} className={buildLinkClass}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to={"reviews"} className={buildLinkClass}>Reviews</NavLink>
                </li>
            </ul>
        </div>
    )
}