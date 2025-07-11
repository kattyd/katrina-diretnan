import React from "react";
import "../styles/hero.css";
import hero from "../assets/tech-face.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-glass">
                <img className="hero-img" src={hero} alt="hero image" />
                <h1>katrina diretnan</h1>
                <p>i will help you build things if you let me :)</p>
            </div>
        </section>
    );
};

export default Hero;