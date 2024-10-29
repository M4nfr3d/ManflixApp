import placeholder from "../img/popcorn.png"

export function getMovieImg(path,width) {
    return path?`https://image.tmdb.org/t/p/w${width}${path}`: placeholder
}

// const imageUrl = "https://image.tmdb.org/t/p/w500"+movie.poster_path