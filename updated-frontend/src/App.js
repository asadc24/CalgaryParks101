import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Community from "./pages/Community/[id]";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/community/:community_name' element={<Community/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
