import "./login.css";
import { useLoginContext, useLoginToogleContext } from "../util/LoginProvider";
import { ContextMovieCard } from "./ContextMovieCard";
import { Link } from "react-router-dom";

export function LoginPage() {
  const user = useLoginContext();
  const cambiaSesion = useLoginToogleContext();

  console.log(user)

  return (
    <div className="login">
      <div className="login-background">
        <header className="login-header">
          <div className="login-wrapper">
            <img
              className="logo"
              src="https://i.ibb.co/1vCS7fd/manflix-Logo.png"
              alt=""
            />
          </div>
        </header>
        <main className="login-container">
          <form action="">
            <fieldset>
              <legend>Inicia sesión</legend>
              <input type="email" disabled placeholder="Tu correo" />
              <input type="password" disabled placeholder="Contraseña" />
              <Link type="button" className="loginButton" onClick={cambiaSesion} to="/contextmoviecard"><p>Entrar</p></Link>
            </fieldset>
            <div className="login-container-footer">
              <span>
                <a href="#">¿Olvidaste la contraseña?</a>
              </span>
              <span>
                ¿Primera vez en manflix?{" "}
                <a href="#">
                  <b>Registrate ahora!</b>
                </a>
              </span>
              <small>
                Esta página está protegida por Google reCAPTCHA para comprobar
                que no eres un robot.
                <a href="#">
                  <b>Más info</b>
                </a>
              </small>            
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
