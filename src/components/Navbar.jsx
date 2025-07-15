import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)  
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // fallback in case of component unmount
    };
  }, [isOpen]);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <div className={`nav-links ${isOpen ? "open" : ""}`} ref={menuRef}>
                <ul>
                    {navLinks.map((link, idx) => (
                        <li key={idx}>
                            <a href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
             <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)} ref={hamburgerRef}>
                <div className="icon-wrapper">
                    <FaBars className="bar-icon" />
                    <FaTimes className="close-icon" />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;