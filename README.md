# React + Vite
_Este proyecto esta creado con React,html,CSS y JavaScript
_Para iniciar la compilacion antes debemos importar las dependencias:
    > yarn
_Para ejecutar la aplicacion:
    > yarn dev
_La API que se consume es de una api de peliculas llamada TMDB

¡¡Todavia hay cosas por mejorar y aprender :D!!

# Para desplegar la pagina en gitHub pages
_En el package.json debemos agregar la propiedad: 
{
    "homepage": "https://(usuarioGitHub).github.io/(NombreRepositorio)",
}
_Si estar usando BrowserRouter debemos cambiarlo por HashRouter, esto debido
a que GitHub pages no maneja un servidor backend para manejar las rutas

_Al final reconstruye la aplicacion: yarn build

# Para desplegar en gitHub pages
_ En el archivo vite.config.js:

base: "/ManflixApp/",
  build: {
    outDir: './docs'
  }


