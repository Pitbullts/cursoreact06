
import NavBar from "../components/jsx/navbar/navbar";
import MainPage from "../components/jsx/body/mainPage";

function NotFound() {

    return (
        <div>
            <div>
                <NavBar />
                <MainPage />
                </div>
                <div className="center">
                    <h1>Por aca no es, usa los botones del NavBar y movete a una seccion que si funque.</h1>
                    <p> Muchas tenkius</p>
                </div>
        </div>
        
    )
}
export default NotFound;