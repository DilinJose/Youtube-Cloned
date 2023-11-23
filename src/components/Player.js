import { useState } from "react";
import PlayList from "./PlayList";

const Player = ({ videoId, videoData, setVideoId }) => {
  const style = {
    border:"1px solid grey",
  
  }
  return (
    <div className=" ms-5" style={style}>
      <div className="d-flex justify-content-center align-items-start ms-5">
        <div>
          <iframe
            // className="flex-3"
            width="750"
            height="450"
            src={`https://www.youtube.com/embed/${videoId}`}
          ></iframe>
        </div>
     
          <PlayList
            className="ms-5"
            videoData={videoData}
            setVideoId={setVideoId}
          />
      
      </div>
    </div>
  );
};

export default Player;
