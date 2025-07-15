import React from "react";
import "../styles/media.css";
import mediaImg from "../assets/media-face.webp";
import mascot from "../assets/mascot.webp";
import search from "../assets/search.webp";
import Navbar from "../components/Navbar";
import YouTubeGallery from "../components/YoutubeGallery";

const MediaView = () => {
    return (
        <>
            <Navbar mode="media" />
            <div className="media">
                <section id="m-about" className="m-about">
                    <div className="m-about-text">
                        <h1>kaaahtea</h1>
                        <p>I’m Katrina Dawap — a writer and media creative drawn to storytelling 
                            in all its forms.
                            Whether through essays, podcasts, or visual work, 
                            I care about capturing human moments and shaping them into 
                            something that resonates. I like work that’s thoughtful, 
                            slightly offbeat, and emotionally honest — 
                            and that’s what I try to make here.</p>
                    </div>
                    <div className="media-image">
                        <img src={mediaImg}  alt="media-img" loading="lazy"/>
                    </div>
                </section>
                <section id="radio" className="radio" data-aos="fade-up">
                    <div className="radio-text">
                        <h1>SearchFM OAP</h1>
                    </div>
                    <img  src={search} alt="search media" loading="lazy"/>
                    <div className="radio-card">
                        <p>OAP at SearchFM 92.3 campus radio, FUTMinna. 
                            I've hosted and produced segments that reflect my love 
                            for conversation, music, and storytelling. 
                            Whether it's light-hearted or deeply reflective, 
                            I connect with my audience. <br />2021 - present</p>
                    </div>
                </section>
                <section id="youtube" className="youtube">
                    <h1>Youtube</h1>
                    <p>My YouTube channel is a space for storytelling in motion. 
                        Part lifestyle, part experiment. 
                        It’s where I share slices of life, 
                        thoughts in transit, and moments I want to document 
                        before they pass.</p>
                    <YouTubeGallery />
                </section>
                <section id="katz" className="katz">
                    <div className="katz-content">
                        <div className="text">
                            <h2>Katz Magazine</h2>
                            <p>
                                A literary magazine for new Nigerian voices. Exploring storytelling, 
                                essays, interviews, and more. Curated and edited with care, updated regularly.
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
                            <img src={mascot} alt="katz mascot" loading="lazy"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MediaView;