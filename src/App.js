import { Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './components/jsx/navbar/navbar';
import Home from './pages/home/Home';
import Catalogo from './pages/Catalogo/Catalogo';
import NotFound from './pages/NotFound';
import Detail from './components/jsx/Detail/Detail';

function App() {
    return (
        <div>
        
        <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/catalogo" element={<Catalogo />}/>
            <Route path="/catalogo/:productID" element={<Detail />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
        

        </div>
    )


}

export default App;