
import './App.css';
import Navigation from './components/navigation';
import Home from './components/Home';
import Prompt from './components/Prompt';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
 <div className="App">
  <Navigation/>
  <Routes>
  <Route path='/' exact element={<Home/>} />
  <Route path='/Prompt' element={<Prompt/>} />
  </Routes>

     </div>
    </Router>
  
  );
}

export default App;
