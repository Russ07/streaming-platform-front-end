import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import listData from './data/video-details.json'
import Header from "./components/Header/Header";
import Hero from "./components/Video/Video";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import Comments from "./components/Comments/Comments";
import VideoElement from "./components/VideoElement/VideoElement";
import VideoList from "./components/VideoList/VideoList";
import { useState } from "react";
function App() {

  // finds video for hero elemet
  function findObject(id){
    const currentObject = listData.find((video) => video.id == id);
    console.log(currentObject)
    return currentObject;
  }

// gets id from onClick func in VideoElement
  const [currentVideo, setCurrentVideo] = useState(findObject(listData[0].id));
  const getId = (getObject) => {
    console.log(getObject)
    setCurrentVideo(findObject(getObject)); 
    return;
  }
  console.log(currentVideo.id)

  // creat a list without element that been clicked
  const suggestedVideos = listData.filter((video) => video.id != currentVideo.id);
  console.log(suggestedVideos)

  return (
    <>
      <Header />
      <Hero 
      currentVideo={currentVideo}
      />
      <div className="description-comments-wrapper">
        <div className="description-comments-wrapper__style-block">
          <VideoDescription
          currentVideo={currentVideo}
          />
          <Comments
          currentVideo={currentVideo}
           />
        </div>  
        <span className="description-comments-wrapper__style-video">
          <VideoList
          dataList={suggestedVideos}
          currentVideo={currentVideo}
          getId={getId}
          />
        </span>
        
      </div>
    </>
  );
}

export default App;
