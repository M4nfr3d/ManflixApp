import { MovieCard } from "./MovieCard";
import "../components/ContextMovieCard.css";
import { useFetchMovies } from "../../hooks/useFetchMovies"
import { NavbarComponent } from "./NavbarComponent";
import { Outlet } from "react-router-dom";


export function ContextMovieCard() {
    const {movies} = useFetchMovies();
    // console.log(movies)
    return(
        <div className="containerCard">
            {movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}