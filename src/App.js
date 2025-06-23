import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Donation } from "./components/Donation";
import { Blog } from "./components/Blog";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Program } from "./components/Program";
import { LaghimaKhajuria } from "./components/LaghimaKhajuria";
import { Rajendra } from "./components/Rajendra";
import { Lakkaraju } from "./components/Lakkaraju";
import { NeeruMishra } from "./components/NeeruMishra";
import "./css/profile.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Scholarship } from "./components/Scholarship";
import { Medical } from "./components/Medical";
import { Mrg } from "./components/Mrg";
import { ToastContainer } from "react-toastify";



const App = () => {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/program" element={<Program />} />
          <Route path="/laghima" element={<LaghimaKhajuria />} />
          <Route path="/rajendra" element={<Rajendra />} />
          <Route path="/lakkaraju" element={<Lakkaraju />} />
          <Route path="/neeru" element={<NeeruMishra />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/mrg" element={<Mrg />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
