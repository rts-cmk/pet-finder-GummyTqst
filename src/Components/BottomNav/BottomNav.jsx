import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline, IoHomeOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { NavLink } from "react-router";

import "../BottomNav/BottomNav.sass"

export default function BottomNav() {
    return (
        <div className="bottom-nav__nav-content">
            <nav className="bottom-nav">
                <NavLink to="/home" end className={({ isActive }) => `bottom-nav__a ${isActive ? "bottom-nav__a--active" : ""}`}>
                    <IoHomeOutline />
                </NavLink>

                <NavLink to="/message" end className={({ isActive }) => `bottom-nav__a ${isActive ? "bottom-nav__a--active" : ""}`}>
                    <FiMessageCircle />
                </NavLink>

                <NavLink to="/favorites" end className={({ isActive }) => `bottom-nav__a ${isActive ? "bottom-nav__a--active" : ""}`}>
                    <FaRegHeart />
                </NavLink>

                <NavLink to="/profile" end className={({ isActive }) => `bottom-nav__a ${isActive ? "bottom-nav__a--active" : ""}`}>
                    <IoPersonOutline />
                </NavLink>
        </nav>
        </div>
    )
}