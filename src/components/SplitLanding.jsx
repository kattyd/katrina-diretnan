import React from "react";
import { Link } from "react-router-dom";
import "../styles/SplitLanding.css";
import techImg from "../assets/tech-face.png";
import mediaImg from "../assets/media-face.png";

const SplitLanding = () => {
    return (
        <section className="split-landing">
            <Link to="/tech" className="split left">
                <div className="glass-card">
                    <img src={techImg} className="tech-img"/>
                    <h1>tech</h1>
                    <p>web, dev tools</p>
                </div>
            </Link>

            <Link to="/media" className="split right">
                <div className="glass-card">
                    <img src={mediaImg} className="media-img"/>
                    <h1>media</h1>
                    <p>stories, visuals</p>
                </div>
            </Link>
        </section>
    );
};

export default SplitLanding;