import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="center">Dirigite a el catalogo.</h1>
      <Link to="/catalogo" className="text-center text-muted">
        <p>Catalogo</p>
      </Link>
    </div>
  );
}
export default Home;
