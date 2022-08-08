import React from "react";
import logo from "../assets/imgs/logo192.png";
import { Link } from "react-router-dom";

function Footer(){
    var date = new Date();
    var year = date.getFullYear();
    return (
        <div>
            <footer className="footer-section">
        <div className="info-float" align="center">
            <Link to="/" ><img id="logo-footer" className="logo" alt="logo-footer" src={logo} /></Link>
        </div>
                <h4 className="footer-content">&copy; AppReact <span className="year">{year}</span></h4><p className="footer-content">By : Levi-Luigi Petrea</p>
            </footer>
        </div>

    );
}

export default Footer;