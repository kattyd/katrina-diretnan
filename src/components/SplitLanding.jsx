import React from "react";
import { Link } from "react-router-dom";
import "../styles/SplitLanding.css";
import techImg from "../assets/tech-face.png";
import mediaImg from "../assets/media-face.png";

const SplitLanding = () => {
    return (
        <section className="split-landing">
            <div className="split left">
                <Link to="/tech" className="glass-card">
                    <img src={techImg} className="tech-img"/>
                    <h1>tech</h1>
                    <p>web, dev tools</p>
                </Link>
            </div>

            <div className="split right">
                <Link to="/media" className="glass-card">
                    <img src={mediaImg} className="media-img"/>
                    <h1>media</h1>
                    <p>stories, visuals</p>
                </Link>
            </div>
        </section>
    );
};

export default SplitLanding;