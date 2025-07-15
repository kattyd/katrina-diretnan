import React from "react";
import { Link } from "react-router-dom";
import "../styles/SplitLanding.css";
import Header from "./Header";
import Footer from "./Footer";
import techImg from "../assets/tech-face.webp";
import mediaImg from "../assets/media-face.webp";

const SplitLanding = () => {
    return (
    <>
        <div className="landing-page">
            <Header />
            <section className="split-landing">
                <div className="split left">
                    <Link to="/tech" className="glass-card">
                        <img src={techImg} className="tech-img" alt="tech avatar" loading="lazy"/>
                        <h1>tech</h1>
                        <p>I design and build <br />web experiences.</p>
                    </Link>
                </div>

                <div className="split right">
                    <Link to="/media" className="glass-card">
                        <img src={mediaImg} className="media-img"/>
                        <h1>media</h1>
                        <p>I tell stories through video, <br />sound, and writing.</p>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    </>    
    );
};

export default SplitLanding;