import { ArrowDropDown, Search, Notifications } from "@material-ui/icons";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

export function NavbarComponent() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://i.ibb.co/1vCS7fd/manflix-Logo.png"
            alt="manflix logo"
          />
          <Link to="/contextmoviecard">
            <span>Películas</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Usuario</span>
          <Notifications className="icon" />
          <img src="http://www.w3.org/2000/svg" alt="" />

          <div className="dropdown">
            <span>Opciones</span>
            <div className="content">
              <Link to="/contextmoviecard">Configuración</Link>
              <Link to="/">Salir</Link>
            </div>
          </div>
          <ArrowDropDown className="icon" />
        </div>
      </div>
    </div>
  );
}
