import "./Videoupload.scss";
import thumbnailImg from "../../assets/images/Upload-video-preview.jpg";
import buttonIcon from "../../assets/icons/upload.svg";
import axios from "axios";

function VideoUpload() {

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`http://localhost:8080/videos`, {
        title: event.target.title.value,
        description: event.target.description.value
      });
      event.target.reset();
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  const handleButtonClick = () => {
    document.getElementById('video-upload-form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  };

  return (
    <div className="video-upload">
      <h1 className="video-upload__heading">Upload Video</h1>
      <span className="video-upload__thumbnail-form-wrapper">
        <div className="video-upload__thumbnail-container">
          <h3 className="video-upload__thumbnail-heading">VIDEO THUMBNAIL</h3>
          <img className="video-upload__thumbnail-img" src={thumbnailImg} alt="Video Thumbnail" />
        </div>
        <form id="video-upload-form" className="video-upload__form-container" onSubmit={handleSubmit}>
          <label className="video-upload__label">TITLE YOUR VIDEO</label>
          <input name="title" type="text" className="video-upload__input" placeholder="Add a title to your video" required />
          <label className="video-upload__label">ADD A VIDEO DESCRIPTION</label>
          <textarea name="description" className="video-upload__description" placeholder="Add a description to your video"></textarea>
        </form>
      </span>
      <div className="video-upload__button-container">
        <button onClick={handleButtonClick} type="button" className="video-upload__button-upload button-hover">
          <img className="video-upload__button-icon" src={buttonIcon} alt="Upload Icon" />
          <span className="video-upload__button-text">PUBLISH</span>
        </button>
        <button className="video-upload__button-cancel">CANCEL</button>
      </div>
    </div>
  );
}

export default VideoUpload;