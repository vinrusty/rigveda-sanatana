// import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Mandalas from "./pages/mandalas/mandalas";
import Adhyaya from "./pages/adhyaya/adhyaya";
import Sukta from "./pages/sukta/sukta";
import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/about/about";
function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contents' element={<Mandalas/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contents/:mandalam' element={<Adhyaya/>}/>
    <Route path='/contents/:mandalam/:aadhyayaa' element={<Sukta/>}/>
    </Routes>
    </Router>
  );
}

export default App;
