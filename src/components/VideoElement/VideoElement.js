import "./VideoElement.scss";
import data from '../../data/video-details.json';



function VideoElement(props) {
    return (
      <>
        <div className="video-element">
      <img className="video-element__image" src={props.img}/>
      <div className="video-element__style-container">
        <h2 className="video-element__heading">{props.title}</h2>
        <p className="video-element__cahnnel">{props.channel}</p>
      </div>
        </div>
      </>
    );
  }
  
  export default VideoElement;