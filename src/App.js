import React from "react";
import Home from './routes/Home';
import './App.css';
import { HashRouter,Routes,Route } from "react-router-dom";
import About from './routes/About'
import Navigation from "./components/Navigation";
import Detail from './routes/Detail'

function App(){
  return (
    <HashRouter>
       <Navigation/>
      <Routes>
        <Route path="/" exact={true} Component={Home} />
        <Route path="/about" Component={About}/>
        <Route path="/movie/:id" Component={Detail} />
     </Routes>
    </HashRouter>

    
  );
}

export default App;