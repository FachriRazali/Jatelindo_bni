import logo from "../../assets/img/logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="Logo" />
      <div className="menu">
        <Link to="/home">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/achive">ACHIEVEMENT</Link>
        <Link to="/project">PROJECT</Link>
        <Link to="/product">PRODUCT</Link>
        <Link to="/partner">PARTNER</Link>
        <Link to="/artikel">ARTICLE</Link>
      </div>
    </div>
  );
}

export default Navbar;
