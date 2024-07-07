import "./CommentElement.scss";
import data from "../../data/video-details.json";

function CommentElement() {
  return (
    <>
      <div class="comment-section__container">
        <img class="comment-section__img" />
        <div class="comment-section__wrapper">
          <div class="comment-section__name-date-wrapper">
            <p class="comment-section__name">Victor Pinto</p>
            <p class="comment-section__date">17/02/2021</p>
          </div>
          <p class="comment-section__comment">
            This is art. This is inexplicable magic expressed in the purest way,
            everything that makes up this majestic work deserves reverence. Let
            us appreciate this for what it is and what it contains.
          </p>
        </div>
      </div>
      {/* <section className="card-list">
            {cardContent.map((content, index) => (
                <Card 
                    key={index} 
                    title={content.title} 
                    content={content.content}
                />
            ))}
        </section> */}
    </>
  );
}

export default CommentElement;
