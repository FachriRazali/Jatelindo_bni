import Navbar from "./component/navbar/navbar.js";
import Footer from "./component/footer/footer.js";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Achive from "./pages/achive.jsx";
import Project from "./pages/project.jsx";
import Product from "./pages/product.jsx";
import Partnert from "./pages/partner.jsx";
import Artikel from "./pages/artikel.jsx";
import Detail from "./pages/detail.jsx";
import React from "react";
import DataFetchingComponent from "./component/DataFetchingComponent.js";

function AppContent() {
  const location = useLocation();
  const isDetailPage = location.pathname === "/detail";

  return (
    <>
      {!isDetailPage && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achive" element={<Achive />} />
        <Route path="/project" element={<Project />} />
        <Route path="/product" element={<Product />} />
        <Route path="/partner" element={<Partnert />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>

      {/* <DataFetchingComponent /> */}
      {!isDetailPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
