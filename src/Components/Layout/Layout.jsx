import { Outlet, useLocation } from "react-router";
import BottomNav from "../BottomNav/BottomNav";

export default function Layout() {

    const location = useLocation();

    const isDetailPage = location.pathname.startsWith('/home/details/');

    return (
        <div className="layout">
            <Outlet />

            {!isDetailPage && <BottomNav />}
        </div>
    )
}