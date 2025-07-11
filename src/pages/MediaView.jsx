import React from "react";
import "../styles/media.css";
import mediaImg from "../assets/media-face.png";
import mascot from "../assets/mascot.png";
import Navbar from "../components/Navbar";
import YouTubeGallery from "../components/YoutubeGallery";

const MediaView = () => {
    return (
        <>
            <Navbar mode="media" />
            <section id="m-about" className="m-about">
                <div className="m-about-text">
                    <h1>kaaahtea</h1>
                    <p>a multifaceted digital creator. founder of Katz literary magazine, radio oap, youtuber & podcast host</p>
                </div>
                <div className="media-image">
                    <img src={mediaImg}  alt="media-img"/>
                </div>
            </section>
            <section id="radio" className="radio" data-aos="fade-up">
                <div className="radio-text">
                    <h1>radio OAP</h1>
                </div>
                <div className="radio-card">
                    <h3>here is the copy text idk what to write in thsi place, i think i will put an image in this card so yeah this is just the placeholder</h3>
                </div>
            </section>
            <section id="youtube" className="youtube">
                <h1>youtube</h1>
                <YouTubeGallery />
            </section>
            <section id="katz" className="katz">
                <div className="katz-content">
                    <div className="text">
                        <h2>Katz Magazine</h2>
                        <p>
                            A literary magazine for new Nigerian voices. Exploring storytelling, 
                            essays, interviews, and more. Curated and edited with care, updated quarterly.
                        </p>
                        <a 
                        href="https://katzmagazine.substack.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="katz-button"
                        >
                        Read Latest Issue →
                        </a>
                    </div>
                    <div className="mascot">
                        <img src={mascot} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default MediaView;