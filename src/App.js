import './index.css';
import NavBar from './components/navbar';
import MainPage from './components/mainPage';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {
    return (
        <div>
        <NavBar />
        <MainPage />
        <ItemListContainer widget='buenos dias, noches y buen finde al tutor por si las dudas digo que esto es un saludo' />
        <ItemCount />
        </div>
    )


}

export default App;