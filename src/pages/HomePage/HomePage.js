import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Hero from "../../components/Video/Video";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";
import listData from "../../data/video-details.json";
import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
function HomePage() {
  const apiKey = "d8647fc6-6c8d-475f-8250-0d0cda5d1dae";
  const [currentVideo, setCurrentVideo] = useState([]);
  const [fetchedVideoList, setFetchedVideoList] = useState([]); 
  const [myId, setmyId] = useState("");
  const { videoId } = useParams();
 console.log(myId)


useEffect(() => {


        
    const fetchVideoList = async () => {
      try {
        const getResponse = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${apiKey}`
        );
        console.log(getResponse.data);
        setFetchedVideoList(getResponse.data);
        if(getResponse.data)
        {setmyId(getResponse.data[0].id)}
        return getResponse
      } catch (error) {
        console.log(error);
      }
      
    };
    fetchVideoList();
  }, []);

  useEffect(() => {
    if(myId || videoId) {
        const currentId = videoId || myId
        console.log(currentId)
        console.log("myId:",myId)
    const fetchVideoDataFirst = async () => {
      try {
        const getResponseFirst = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${currentId}?api_key=${apiKey}`
        );
        console.log(getResponseFirst.data);
        setCurrentVideo(getResponseFirst.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideoDataFirst();
}
  }, [myId, videoId]);


  const suggestedVideos = fetchedVideoList.filter(
    (video) => video.id !== currentVideo.id
  );

  return (
    <>
      <Hero currentVideo={currentVideo} />
      <div className="description-comments-wrapper">
        <div className="description-comments-wrapper__style-block">
          <VideoDescription currentVideo={currentVideo} />
          {/* <Comments currentVideo={currentVideo} /> */}
        </div>
        <span className="description-comments-wrapper__style-video">
          <VideoList
            dataList={suggestedVideos}
            currentVideo={currentVideo}
          />
        </span>
      </div>
    </>
  );
}

export default HomePage;
