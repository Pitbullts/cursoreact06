import './index.css';
import NavBar from './components/navbar';
import MainPage from './components/mainPage';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <div>
        <NavBar />
        <MainPage />
        <ItemListContainer widget='buenos dias, noches y buen finde al tutor por si las dudas digo que esto es un saludo' />

        </div>
    )


}

export default App;