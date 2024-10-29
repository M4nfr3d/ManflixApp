import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { useParams } from "react-router-dom";
import { getMovieImg } from "../util/getMovieImage";
import { NavbarComponent } from "../components/NavbarComponent";
import "../pages/MovieDetails.css"

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos,setGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres)
      console.log(data)
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie.poster_path, 400);

  return (
    <>
      <NavbarComponent/>
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
