import { useEffect, useState } from "react"
import { get } from "../src/data/httpClient"

export function useFetchMovies() {
    const [movies, setMovies] = useState([]) 
    const toGetMovies = async () => {
        const {results} = await get("/discover/movie");
        setMovies(results)
    }

    useEffect(()=>{
       toGetMovies();
    },[])

    return({
        movies
    })
}