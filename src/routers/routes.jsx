import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, MovieDetails, DashboardPage } from "../pages";
import { ContextMovieCard } from "../components";

export function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage/>} />
                <Route path="/dashboard/" element={<DashboardPage />}>
                    <Route index element={<ContextMovieCard />} />
                    <Route path="moviedetails/:movieId" element={<MovieDetails />} />
                </Route>
            </Routes>
        </Router>
    )
}