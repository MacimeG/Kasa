import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "../src/pages/Home.jsx"
import FicheLogements from './pages/FicheLogements.jsx';
import "../src/styles/StyleGlobale.css"
import Error404 from './pages/404.jsx';
import Apropos from './pages/Apropos.jsx';

import '../src/styles/StyleGlobale.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Apropos/' element={<Apropos/>} />
          <Route path='/FicheLogements/:id' element={<FicheLogements/>}/>
          <Route path="/*" element={<Error404 />} />
        </Routes>

      </Router>
      </header>
      
    </div>
  );
}

export default App;
