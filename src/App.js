import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from './page/home';
import About from './page/about';
import Contact from './page/contact';
import Projects from './page/projects';
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

function App() {
  return (
     <div className='App'>
        <Navbar />
        <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route exact path="/about" element = {<About />}/>
        <Route exact path="/contact" element = {<Contact />}/>
        <Route exact path="/projects" element = {<Projects />}/>
        </Routes>
        <Footer />
    </div>
    );
}
export default App;
