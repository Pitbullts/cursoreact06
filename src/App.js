import './index.css';
import NavBar from './components/jsx/navbar/navbar';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
        
        <Routes>
            <Route path="/" element={<NavBar />} ></Route>
            <Route path="/home" element={<Home />}/>
        </Routes>
        

        </div>
    )


}

export default App;