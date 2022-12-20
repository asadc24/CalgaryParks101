import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Community from './pages/Community/[id]';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/community/:id' element={<Community/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
