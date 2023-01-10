import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Community from "./pages/Community/[id]";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Nearby from "./pages/Nearby/Nearby";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/community/:community_name' element={<Community/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/nearby' element={<Nearby/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
