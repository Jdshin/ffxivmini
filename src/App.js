import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Faux from './pages/Faux';
import MiniCact from './pages/MiniCact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path='/faux' element={<Faux/>} />
          <Route path='/minicact' element={<MiniCact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
