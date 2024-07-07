import logo from './logo.svg';
import './App.css';
import "./App.scss"
import Header from './components/Header/Header.js';
import Hero from './components/Video/Video.js';
import VideoDescription from './components/VideoDescription/VideoDescription.js';
import Comments from './components/Comments/Comments.js';
import VideoElement from './components/VideoElement/VideoElement.js';
function App() {
  return (
    <>
  <Header />
  <Hero />
  <div className='description-comments-wrapper'>
  <VideoDescription/>
  <Comments/>
  <VideoElement/>
  </div>  
    </>
  );
}

export default App;
