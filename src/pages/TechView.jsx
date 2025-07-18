import React from "react";
import "../styles/tech.css";
import techImg from "../assets/tech-face.webp";
import guldspy from "../assets/guldpsy.webp";
import budgettoire from "../assets/budgettoire.webp";
import litdao from "../assets/litdao.webp";
import libtracker from "../assets/libtracker.webp";
import brainwave from "../assets/brainwave.webp";
import Navbar from "../components/Navbar";

const TechView = () => {
    return (
        <>
            <Navbar mode="tech" />
            <div className="tech">
                <section id="t-about" className="t-about">
                    <div className="tech-image">
                        <img src={techImg}  alt="tech-img" loading="lazy" />
                    </div>
                    <div className="t-about-text">
                        <h1>katrina</h1>
                        <p>a self-taught full-stack developer 
                            who enjoys building clean, thoughtful websites.
                            </p>
                    </div>
                </section>
                <section id="projects" className="projects">
                    <h1>projects</h1>
                    <div className="project-cards">
                        <div className="p-card" data-aos="fade-up" data-aos-duration="3000">
                            <h2>Guldspy</h2>
                            <p>mint your very own gulspy tokens on the solana blockchain. <br /> Note: Guldspy tokens are worth nothing.</p>
                            <img src={guldspy}  alt="guldspy" loading="lazy" />

                        </div>
                        <div className="p-card" data-aos="fade-up" data-aos-duration="3000">
                            <h2>Budgettoire</h2>
                            <p> A simple and stylish budgeting web app that helps users track their income, expenses, and overall financial habits. Built with React and Firebase, it allows users to log transactions, and view summaries</p>
                            <img src={budgettoire}  alt="budgettoire" loading="lazy" />

                        </div>
                        <div className="p-card" data-aos="fade-up" data-aos-duration="3000">
                            <h2>LitDAO</h2>
                            <img src={litdao}  alt="litdao" loading="lazy" />
                        </div>
                        <div className="p-card" data-aos="fade-up" data-aos-duration="3000">
                            <h2>Library Tracker</h2>
                            <p>Keep track of all the books you read as well as progress on your current reads. Add books you want to read.</p>
                            <img src={libtracker}  alt="libtracker" loading="lazy" />
                        </div>
                        <div className="p-card" data-aos="fade-up" data-aos-duration="3000">
                            <h2>Brainwave Landing Page </h2>
                            <p>a landing page for a furniture store.</p>
                            <img src={brainwave}  alt="brainwave" loading="lazy" />
                        </div>
                    </div>
                </section>
                <section id="skills" className="skills-section">
                    <h2>my skills</h2>
                        <div className="skills-wrapper">
                            {[
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "React",
                            "Node.js",
                            "Git",
                            "AOS"
                            ].map((skill, idx) => (
                            <span className="skill-pill" key={idx}>
                                {skill}
                            </span>
                            ))}
                        </div>
                </section>
                <section id="cta" className="cta-section">
                    <div className="cta-card">
                        <h2>I will help you build cool things.</h2>
                        <a href="mailto:kattydee3@gmail.com" className="cta-btn">Say hello</a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TechView;