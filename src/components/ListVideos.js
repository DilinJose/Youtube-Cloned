import Videos from "./Videos";

const ListVideos = ({ videoData,setVideoId }) => {
  return (
    <div>
      <Videos videoData={videoData} setVideoId={setVideoId}/>
    </div>
  );
};

export default ListVideos;
