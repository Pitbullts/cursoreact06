import './index.css';
import NavBar from './components/jsx/navbar/navbar';
import MainPage from './components/jsx/body/mainPage';
import ItemListContainer from './components/jsx/body/ItemListContainer';

function App() {
    return (
        <div>
        <NavBar />
        <MainPage />
        <ItemListContainer />

        </div>
    )


}

export default App;