import { useNavigate } from "react-router-dom";

const PlayList = ({ videoData,setVideoId }) => {
  const navigate = useNavigate();
  const handlePlayer = (videoId) => {
    setVideoId(videoId);
    // navigate("player");
  };
  return (
    <div>
      {videoData.map((data) => {
        return (
          <div
            onClick={() => {
              handlePlayer(data.id.videoId);
            }}
            className="d-flex flex-column justify-content-center align-items-center ms-4"
            style={{
              margin: "10px",
              border: "1px solid #ccc",
              padding: "10px",
              width: "40%",
            }}
          >
            <img
              style={{ width: "90%" }}
              src={data.snippet.thumbnails.medium.url}
              alt={data.snippet.title}
            />
            <p className="text-center mt-2">{data.snippet.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PlayList;
