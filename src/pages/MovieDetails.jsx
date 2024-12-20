import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { useParams } from "react-router-dom";
import { getMovieImg } from "../util/getMovieImage";
import "../pages/MovieDetails.css"

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [generos,setGeneros] = useState([]);

  const getMovie = async () => {
    try {
      const data = await get("/movie/" + movieId)
      console.log("Se obtuvo los datos de la API:", data)
      setMovie(data)
      setGeneros(data.genres)

    } catch (error) {
      console.error("No se pudo obtener los datos de la API", error)
    }
  }
  
  useEffect(() => {
    getMovie()
  }, [movieId]);

  console.log(movie)
  const imageUrl = getMovieImg(movie.poster_path, 400);

  return (
    <>
      <main className="detailsContainer">
        <img className="col movieImage" src={imageUrl} alt={movie.title} />
        <div className="col movieDetails">
          <p className="tittle">
            <strong>Título: </strong>
            {movie.title}
          </p>
          <div className="color-text">
            <strong>Género: </strong>
            {generos.map((genero) => (
              <p key={genero.id} style={{display: "inline", margin: 5}}>{genero.name}</p>
            ))}
          </div>
          <p className="color-text">
            <strong>Descripcion: </strong>
            {movie.overview}
          </p>
        </div>
      </main>
    </>
  );
}
