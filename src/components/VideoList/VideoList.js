import "./VideoList.scss";
import data from '../../data/video-details.json';
import VideoElement from "../VideoElement/VideoElement";

function VideoList() {
    return (
      <>
      <div>
        <h2 className="video-list__heading">NEXT VIDEOS</h2>
        <section className="video-list">
            {data.map((content, index) => (
                <VideoElement 
                    key={index} 
                    title={content.title} 
                    channel={content.channel}
                    img={content.image}
                />
            ))}
        </section>
        </div>
      </>
    );
  }
  
  export default VideoList;