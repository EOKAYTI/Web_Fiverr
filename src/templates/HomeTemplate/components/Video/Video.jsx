import React from "react";
import "./video.scss";

const Video = () => {
  return (
    <div className="video">
      <div className="container">
        <h2>What success on Fiverr looks like</h2>
        <p>
          Vontélle Eyewear turns to Fiverr freelancers to bring their vision to
          life.
        </p>
        <div className="video_file">
          <video
            className="_19aaquz1j _19aaquz16 _19aaquz18 _1rfvtgw1h"
            autoPlay
            controls
            preload="auto"
            crossOrigin="anonymous"
            role="video"
            playsInline
          >
            <source
              role="source"
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/4934b0c8f6441211d97f83585a7c9c00-1722433273322/Vontelle%20Cutdown-%20Breakthrough%20V5"
              type="video/mp4"
            />
            <track
              role="track"
              label="EN"
              srcLang="en-US"
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/subtitles_en.c0bcbb7.vtt"
              default
              kind="subtitles"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
