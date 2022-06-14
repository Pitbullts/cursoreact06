
import './navbar.css'
import logo from '../assets/pirulologo.png'
function NavBar() {

  return (
    <header>
        <img src={logo} className='logo-img' alt='img logo'/>
      <h1>Tienda Pirulo</h1>
      <div  className='container-linka'>
                <div>
                    <a href="https://netflix.com" >Catalogo</a>
                </div>
                <div> 
                    <a href="https://netflix.com">Somos</a>
                </div>
                <div>
                    <a href="https://netflix.com">Contacto</a>
                </div>
            </div>
    </header>
  );
}

export  default NavBar;