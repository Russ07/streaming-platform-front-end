import "./VideoUpload.scss";
import thumbnailImg from "../../assets/images/Upload-video-preview.jpg"
import buttonIcon from "../../assets/icons/upload.svg"
function VideoUpload() {
    return (
      <div className="video-upload">
        <h1 className="video-upload__heading">Upload Video</h1>
        <div className="video-upload__thumbnail-container">
          <h3 className="video-upload__thumbnail-heading">VIDEO THUMBNAIL</h3>
          <img className="video-upload__thumbnail-img" src={thumbnailImg}></img>
        </div>
        <form className="video-upload__form-container">
            <label className="video-upload__label">TITLE YOUR VIDEO</label>
            <input type="text" className="video-upload__input" placeholder="Add a title to your video" required/>
            <label className="video-upload__label">ADD A VIDEO DESCRIPTION</label>
            <textarea className="video-upload__description" placeholder="Add a description to your video"></textarea>
        </form>
        <div className="video-upload__button-container">
          <button className="video-upload__button-upload">
          <img className="video-upload__button-icon" src={buttonIcon} />
          <span className="video-upload__button-text">PUBLISH</span>
          </button>
          <button className="video-upload__button-cancel">CANCEL</button>
        </div>
      </div>
    );
  }
  
  export default VideoUpload;