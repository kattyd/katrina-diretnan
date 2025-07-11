import React from "react";
import { href, Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

function Navbar({ mode }) {
    const mediaLinks = [
        { label: "about", href: "#m-about"}, 
        { label: "radio", href: "#radio"}, 
        { label: "youtube", href: "#youtube"}, 
        { label: "katz", href: "#katz"}, 
    ];

    const techLinks = [
        { label: "about", href: "#t-about" },
        { label: "projects", href: "#projects" },
        { label: "skills", href: "#skills" },
        { label: "cta", href: "#cta" },
    ];

    const navLinks = mode === "media" ? mediaLinks : techLinks;

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <ul className="nav-links">
                {navLinks.map((link, idx) => (
                    <li key={idx}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;