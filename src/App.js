import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import Header from "./components/Header/Header.js";
import Hero from "./components/Video/Video.js";
import VideoDescription from "./components/VideoDescription/VideoDescription.js";
import Comments from "./components/Comments/Comments.js";
import VideoElement from "./components/VideoElement/VideoElement.js";
import VideoList from "./components/VideoList/VideoList.js";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="description-comments-wrapper">
        <div className="description-comments-wrapper__style-block">
          <VideoDescription />
          <Comments />
        </div>
        <span className="description-comments-wrapper__style-video">
          <VideoList/>
        </span>
        
      </div>
    </>
  );
}

export default App;
