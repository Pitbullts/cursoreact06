import "../../css/navbar/navbar.css";
import logo from "../../../assets/pirulologo.png";
import CartWidget from "./CartWidget";
function NavBar() {
  return (
    <header>
      <div className="nav-bg">
        
        <nav className="NavPrincipal">
        <img src={logo} className="logo-img" alt="img logo" />
          <h1 className="PiruloName">Tienda Pirulo</h1>
          <div className="container-linka">
            <a href="https://netflix.com">Catalogo</a>

            <a href="https://netflix.com">Somos</a>

            <a href="https://netflix.com">Contacto</a>
          </div>
          <CartWidget />
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
