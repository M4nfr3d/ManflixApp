import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextMovieCard } from "../pages/ContextMovieCard";
import { MovieDetails } from "../pages/MovieDetails";
import { LoginPage } from "../pages/Login";

export function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage/>}/>
                <Route exact path="/moviedetails/:movieId" element={<MovieDetails />}/>
                <Route exact path="/contextmoviecard" element={<ContextMovieCard/>}/>
            </Routes>
        </Router>
    )
}