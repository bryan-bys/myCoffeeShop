import React from "react";
import CoffeeVideo from "../assets/CoffeeVideo2.mp4";

const BackgroundVideo = () => {
  return (
    <>
      <video
        src={CoffeeVideo}
        width={100}
        height={100}
        autoPlay
        muted
        loop
        className="coffee-video"
      ></video>
    </>
  );
};

export default BackgroundVideo;
