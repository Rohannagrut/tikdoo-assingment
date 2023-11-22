import React from "react";
import teachingvideo from "../assets/production_id_5198161 (2160p).mp4";
const Videobar = () => {
  return (
    <div className="relative mx-auto flex w-8/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
      <div className="mx-2 my-6 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
        <video
          className="shadow-[20px_20px_rgba(255,255,255)]"
          muted
          loop
          autoPlay
        >
          <source src={teachingvideo} type="video/mp4" />
        </video>
      </div>
    </div>
    // <div className="w-4/5 pt-3">
    //   <img
    //     src="https://image.similarpng.com/very-thumbnail/2020/08/Youtube-player-video-Preumim-vector-PNG.png"
    //     alt="video"
    //     className="w-4/5 mx-auto rounded-lg"
    //   />
    // </div>
  );
};

export default Videobar;
