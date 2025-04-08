// import  { useState, useEffect } from "react";

import {BrowserRouter ,Routes,Route} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NavBar from "./component/NavBar";
import { ThemeProvider } from "./Theme-context";

const DarkmodeLightmode = () => {

  return (
    <ThemeProvider>
        <BrowserRouter> 
            <NavBar/>
         <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/blog" element = {<Blog/>}/>
        </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
};

export default DarkmodeLightmode;
