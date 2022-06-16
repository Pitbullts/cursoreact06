import "./body.css";
import ItemListContainer from "./ItemListContainer";
// El widget seria la prop que traigo y modifico usando el greeting
function body() {

    return (
        <body>
            <h1 className="center">Bienvenido a Tienda Pirulo</h1>
            <p className="center"> Podras encontrar en nuestra web diferentes productos.</p>

            <ItemListContainer widget='buenos dias, noches y buen finde al tutor por si las dudas digo que esto es un saludo' />
        </body>
    );
};
export default body;