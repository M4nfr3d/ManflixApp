import { useEffect, useState } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from "../components/MovieCard"
import { NavbarComponent } from "../components/NavbarComponent"
import "../pages/ContextMovieCard.css"

export function ContextMovieCard() {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            setMovies(data.results);
        })
    },[])
    return(
        <div> 
            <NavbarComponent/>
            <ul className="containerCard">
                {movies.map((movie)=>(
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </ul>
        </div>
    )
}