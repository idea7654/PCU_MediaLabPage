import Landing from './components/Landing';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default App;
