import "./App.css";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload-page" element={<VideoUpload/>} />
      <Route path="/videoList/:videoId" element={<HomePage />} />
      </Routes> 
     </BrowserRouter>
  );
}

export default App;
