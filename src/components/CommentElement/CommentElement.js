import "./CommentElement.scss";
import data from "../../data/video-details.json";
import { useState } from 'react';
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import { convertDate } from "../../utils";
// function convertDate(Timestamp) {
//   const date = new Date(Timestamp);
//   const options = {
//   };
//   return date.toLocaleDateString(undefined, options);
// }

function CommentElement(props) {
  return (
    <>
      <div className="comment-section__container">
        <img className="comment-section__img" />
        <div className="comment-section__wrapper">
          <div className="comment-section__name-date-wrapper">
            <p className="comment-section__name">{props.name}</p>
            <p className="comment-section__date">
            {convertDate(props.timestamp)}
            </p>
          </div>
          <p className="comment-section__comment">
          {props.comment}
          </p>
        </div>
      </div>
    </>
  );
}

export default CommentElement;
