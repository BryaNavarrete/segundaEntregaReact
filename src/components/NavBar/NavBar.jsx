import logoPedidosYa from "../../img/LogoPedidos.png";
import restaurantIcon from "../../img/restauranteLogo.png";
import kioscoIcon from "../../img/kioscoLogo.png";
import mascotasIcon from "../../img/mascotasLogo.png";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
              <Link to = "/" className="navbar-brand" href="#">
                  <img src={logoPedidosYa} className="logo" alt="Logo PedidosYa" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav text-white mx-auto">
                      <Link to = "/category/restaurant" className="nav-link text-white active d-flex align-items-center" aria-current="page" href="#">
                          <img src={restaurantIcon} className="category-icon" alt="Icono Restaurant" />
                          Restaurant
                      </Link>
                      <Link to = "/category/kiosco" className="nav-link text-white d-flex align-items-center" href="#">
                          <img src={kioscoIcon} className="category-icon" alt="Icono Kiosco" />
                          Kiosco
                      </Link>
                      <Link to = "/category/mascotas" className="nav-link text-white d-flex align-items-center" href="#">
                          <img src={mascotasIcon} className="category-icon" alt="Icono Mascotas" />
                          Mascotas
                      </Link>
                  </div>
              </div>
          </div>
          <CartWidget />
      </nav>
  );
};

export default NavBar;