import Navbar from './Components/Navbar';
import './App.css';
import { Routes,Route } from 'react-router';
import Aboutus from './pages/Aboutus'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
    <Route path="/about" element={<Aboutus/>} />
      </Routes>
    </div>
  );
}

export default App;
