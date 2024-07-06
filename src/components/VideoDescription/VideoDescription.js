import "./VideoDescription.scss";
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

function VideoDescription() {
  return (
    <>
      <div className="description">
        <h1 className="description__heading">
          The Future of Artificial Intelligence
        </h1>
        <div className="description__data-container">
          <div className="description__data-style-wrapper">
            <p className="description__author"> by Aiden Thomas</p>
            <p className="description__date">8/8/2023</p>
          </div>
          <div className="description__data-style-wrapper">
            <p className="description__view-counter">
              <img className="description__icon" src={viewIcon} /> 980.544
            </p>
            <p className="description__like-counter">
              <img className="description__icon description__icon-like" src={likeIcon} />
              22.479
            </p>
          </div>
        </div>
        <p className="description__text">
          Explore the cutting-edge developments and predictions for Artificial
          Intelligence in the coming years. From revolutionary breakthroughs in
          machine learning to the ethical considerations influencing AI
          advancements, this exploration transcends the boundaries of mere
          speculation. Join us on a journey that navigates the intricate
          interplay between innovation, ethics, and the ever-evolving tech
          frontier.
        </p>
      </div>
    </>
  );
}

export default VideoDescription;
