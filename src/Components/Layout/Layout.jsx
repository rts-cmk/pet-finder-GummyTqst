import { Outlet } from "react-router";
import BottomNav from "../BottomNav/BottomNav";

export default function Layout() {
    return (
        <div className="layout">
            <Outlet />
            <BottomNav />
        </div>
    )
}