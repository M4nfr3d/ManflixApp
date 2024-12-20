import { NavbarComponent, ContextMovieCard } from "../components"
import { Outlet } from "react-router-dom"

export function DashboardPage() {
    return(
    <>
        <NavbarComponent />
        <Outlet />
    </>
    )
}