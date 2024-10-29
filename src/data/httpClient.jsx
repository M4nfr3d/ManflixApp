const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWI2MDQyNjkxMjcwMzU3ZTQxYTZkMTFmNDY0ODI4ZSIsIm5iZiI6MTcyOTU1Mjk1OS4zMTgxMTEsInN1YiI6IjYwM2UyNmM3NDU4MTk5MDA3NzU2NmQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-zDA2yVTSFmgP4xJXw7nGYaFYp-rGOKl7HAl3JXQtnQ",
      "Content-Type": "aplication/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
