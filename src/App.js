import "./App.css";
import "./App.scss";
import listData from './data/video-details.json'
import Header from "./components/Header/Header";
import Hero from "./components/Video/Video";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload-page" element={<UploadPage/>} />
      <Route path="/videoList/:videoId" element={<HomePage />} />
      </Routes> 
     </BrowserRouter>
  );
}

export default App;
