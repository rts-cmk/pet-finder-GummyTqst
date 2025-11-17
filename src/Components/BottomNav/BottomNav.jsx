import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline, IoHomeOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { NavLink } from "react-router";

import "../BottomNav/BottomNav.sass"

export default function BottomNav() {
    return (
        <nav className="bottom-nav">
            <NavLink to="/home" end>
                <IoHomeOutline />
            </NavLink>

            <NavLink to="/home" end>
                <FiMessageCircle />
            </NavLink>

            <NavLink to="/favorites" end>
                <FaRegHeart />
            </NavLink>

            <NavLink to="/profile" end>
                <IoPersonOutline />
            </NavLink>
        </nav>
    )
}