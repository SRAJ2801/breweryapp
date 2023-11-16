import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Search';
import Brewery from './Brewery';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/search" element={<Search/>} />
          <Route path="/brewery-details" element={<Brewery/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
