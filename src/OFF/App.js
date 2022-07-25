import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './components/jsx/navbar/navbar';
import MainPage from './components/jsx/body/mainPage';
import Home from './pages/home/Home';
import Catalogo from './pages/Catalogo/Catalogo';
import NotFound from './pages/NotFound';
 // import Detail from './components/jsx/Detail/ItemDetail';
//                 <Route path="/catalogo/:productID" element={<Detail />}/>

function App() {
    return (
        <div>
    <BrowserRouter>

                    <NavBar />
                    <MainPage />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />}/>
                <Route path="/catalogo" element={<Catalogo />}/>
                <Route path="/productos/cart" element={<CartPage />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>

        </div>
    )


}

export default App;