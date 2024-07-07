import "./VideoElement.scss";
import data from '../../data/video-details.json';

console.log({data});

function VideoElement() {
    const arrayData = {data};
    console.log(arrayData[0]);
    return (
      <>
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
  
  export default VideoElement;