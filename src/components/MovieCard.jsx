import style from "../components/MovieCard.module.css";
import { Link } from "react-router-dom";
import { getMovieImg } from "../util/getMovieImage";

export function MovieCard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className={style.moviecard}>
      <Link to={"moviedetails/" + movie.id}>
        <img
          className="movieimage"
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
        />
      </Link>
      <div className={style.tittle}>{movie.title}</div>
    </div>
  );
}
