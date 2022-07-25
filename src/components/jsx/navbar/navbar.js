import "../../css/navbar/navbar.css";
import logo from "../../../assets/pirulologo.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import {CartContext} from '../../../context/CartContext';
function NavBar() {
  const { getQuantity } = useContext(CartContext);
  return (
    <header>
      <div className="nav-bg">
        <nav className="NavPrincipal">
          <Link to="/home">
            {" "}
            <img src={logo} className="logo-img" alt="img logo" />{" "}
          </Link>
          <Link to="/home">
            <h1 className="PiruloName">Tienda Pirulo</h1>{" "}
          </Link>
          <div className="container-linka">
            <NavLink
              to="/catalogo"
              className={({ isActive }) =>
                isActive ? "activeLink" : "inactive"
              }
            >
              Catalogo
            </NavLink>

            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "activeLink" : "inactive"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? "activeLink" : "inactive"
              }
            >
              Contacto
            </NavLink>
          </div>
          <div>
        <h2> <CartWidget /> cantidad: {getQuantity} </h2>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
