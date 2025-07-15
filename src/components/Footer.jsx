import React from "react";
import "../styles/Footer.css";
import { FaTwitter, FaYoutube, FaEnvelope, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footer">
           <div className="footer-links">
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <FaYoutube />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href="mailto:kattydee3@gmail.com" target="_blank" rel="noreferrer">
                    <FaEnvelope />
                </a>
           </div>
           <div className="footer-text">
             © {new Date().getFullYear()} built with ❤️ <br /> by kaaahtea
           </div>
        </section>
    );
};

export default Footer;