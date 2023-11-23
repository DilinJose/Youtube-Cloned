import { useState } from "react";
import PlayList from "./PlayList";

const Player = ({ videoId, videoData, setVideoId }) => {
  return (
    <div className="d-flex justify-content-center align-items-start">
      <div>
        <iframe
          className="flex-3"
          width="750"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
        ></iframe>
      </div>

      <PlayList className="flex-1" videoData={videoData} setVideoId={setVideoId}  />
    </div>
  );
};

export default Player;
