import "./VideoDescription.scss";
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";
import { convertDate } from "../../utils";
function VideoDescription(props) {
  return (
    <>
      <div className="description">
        <h1 className="description__heading">
        {props.currentVideo.title}
        </h1>
        <div className="description__data-container">
          <div className="description__data-style-wrapper">
            <p className="description__author"> {props.currentVideo.channel} </p>
            <p className="description__date">{convertDate(props.currentVideo.timestamp)}</p>
          </div>
          <div className="description__data-style-wrapper">
            <p className="description__view-counter">
              <img className="description__icon" src={viewIcon} /> {props.currentVideo.views}
            </p>
            <p className="description__like-counter">
              <img className="description__icon description__icon-like" src={likeIcon} />
              {props.currentVideo.likes}
            </p>
          </div>
        </div>
        <p className="description__text">
        {props.currentVideo.description}
        </p>
      </div>
    </>
  );
}

export default VideoDescription;
