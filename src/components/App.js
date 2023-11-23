import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import ListVideos from "./ListVideos";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Player from "./Player";

const App = () => {
  const [videoData, getVideoData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [videoId, setVideoId] = useState("");

  const getData = (item) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${item}&key=AIzaSyCAdkq0Vp5yMmHK3Em6te5SfDAsZzqSk8Y&type=video&maxResults=20&part=snippet`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        getVideoData(data.items);
      })
      .catch((err) => {
        console.log(`Error : ${err}`);
      });
  };

  useEffect(() => {
    getData(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <NavBar />
      <Search setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={<ListVideos videoData={videoData} setVideoId={setVideoId} />}
        />
        <Route
          path="player"
          element={
            <Player
              videoId={videoId}
              videoData={videoData}
              setVideoId={setVideoId}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
