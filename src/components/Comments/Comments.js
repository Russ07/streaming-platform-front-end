import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import buttonComment from "../../assets/icons/add_comment.svg";
import CommentElement from "../CommentElement/CommentElement";
import data from "../../data/video-details.json";
import { useState } from 'react';
import SimpleDateTime  from 'react-simple-timestamp-to-date';

function Comments() {
  const try1 = {data};
  const try2 = try1.data[0].comments;
  console.log(try2);
  const [element, setElement] = useState(
    try2

  );
  return (
    <>
    <h2 className="comment__comments-count">3 Comments</h2>
    <div className="comment__form-container">
        <img className="comment__avatar-img" src={avatar} alt="avatar"/>
      <form id="commentForm" className="comment__form-wrapper" action="" method="post">
        <div className="comment__element">
          <label className="comment__form-label" for="comment">JOIN THE CONVERSATION</label>
          <textarea className="comment__form-textarea" placeholder="Add a new comment" id="comment" name="comment" required=""></textarea>
        </div>
        <div className=" comment__button-wrapper">
        <button id="eventButton" className="comment__button" type="submit"> <img src={buttonComment}/><span className="comment__button-text">COMMENT</span></button>
        </div>
      </form>
      </div>
      <section className="comment__list">
            {element.map((content, index) => (
                <CommentElement
                    key={index} 
                    name={content.name} 
                    comment={content.comment}
                    timestamp={content.timestamp}
                />
            ))}
        </section>
    </>
  );
}

export default Comments;