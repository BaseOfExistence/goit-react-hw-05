import { NavLink } from "react-router-dom"
import clsx from 'clsx'
import css from "./Header.module.css"

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}

export default function Headaer() {
    return (
        <div>
            <nav className={css.header}>
                <NavLink to={"/"} className={buildLinkClass}>Home</NavLink>
                <NavLink to={"/movies"} className={buildLinkClass}>Movies</NavLink>
            </nav>
        </div>
    )
}