import React from 'react';

const IntroVideo = () => {
  return (
    <div className="video-area">
      <div className="container">
        <div
          className="video-view-content"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <div className="video-image">
            <video controls width="100%" height="100%">
              <source src="/video/InnociqueVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
