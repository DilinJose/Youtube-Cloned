import { useNavigate } from "react-router-dom";

const Videos = ({ videoData,setVideoId }) => {

  console.log(videoData);

  const navigate = useNavigate();
  const handlePlayer = (videoId) => {
    setVideoId(videoId);
    navigate("player");
  };
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {videoData.map((data) => {
        return (
          <div
            onClick={()=>{handlePlayer(data.id.videoId)}}
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              margin: "10px",
              border: "1px solid #ccc",
              padding: "10px",
              width: "30%",
            }}
          >
            <img
              style={{ width: "90%" }}
              src={data.snippet.thumbnails.medium.url}
              alt={data.snippet.title}
            />
            <p className="text-center mt-2 h-50 ">{data.snippet.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
