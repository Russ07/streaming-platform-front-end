import logo from './logo.svg';
import './App.css';
import "./App.scss"
import Header from './components/Header/Header.js';
import Hero from './components/Video/Video.js';
import VideoDescription from './components/VideoDescription/VideoDescription.js';
function App() {
  return (
    <>
  <Header />
  <Hero />
  <VideoDescription/>  
    </>
  );
}

export default App;
