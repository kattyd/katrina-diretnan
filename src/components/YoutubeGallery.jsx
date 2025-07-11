import React from "react";
import "../styles/YoutubeGallery.css";

const videoIds = [
  "vUQRs-i5HD8", 
  "TVbOBPdZovs",
  "1UYunqh8ukQ",
];

const YouTubeGallery = () => {
  return (
    <section className="youtube-gallery">
      {videoIds.map((id, idx) => (
        <div className="video-wrapper" key={idx}>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={`YouTube video ${idx + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </section>
  );
};

export default YouTubeGallery;
