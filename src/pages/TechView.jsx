import React from "react";
import "../styles/tech.css";
import techImg from "../assets/tech-face.png";
import Navbar from "../components/Navbar";

const TechView = () => {
    return (
        <>
            <Navbar mode="tech" />
            <section id="t-about" className="t-about">
                 <div className="tech-image">
                    <img src={techImg}  alt="tech-img"/>
                </div>
                <div className="t-about-text">
                    <h1>katrina</h1>
                    <p>web dev. web3</p>
                </div>
            </section>
            <section id="projects" className="projects">
                
            </section>
            <section id="skills" className="skills"></section>
            <section id="cta" className="cta"></section>
        </>
    );
};

export default TechView;