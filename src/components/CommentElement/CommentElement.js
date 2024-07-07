import "./CommentElement.scss";
import data from "../../data/video-details.json";
import { useState } from 'react';
import SimpleDateTime  from 'react-simple-timestamp-to-date';

function CommentElement(props) {
  return (
    <>
      <div class="comment-section__container">
        <img class="comment-section__img" />
        <div class="comment-section__wrapper">
          <div class="comment-section__name-date-wrapper">
            <p class="comment-section__name">{props.name}</p>
            <p class="comment-section__date">
            <SimpleDateTime dateFormat="DMY" showTime = "0" dateSeparator="/"  timeSeparator=":">{props.timestamp}</SimpleDateTime>
            </p>
          </div>
          <p class="comment-section__comment">
          {props.comment}
          </p>
        </div>
      </div>
    </>
  );
}

export default CommentElement;
