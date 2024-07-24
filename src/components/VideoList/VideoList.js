import "./VideoList.scss";
// import data from '../../data/video-details.json'
import VideoElement from "../VideoElement/VideoElement";
import { Link } from "react-router-dom";

function VideoList(props) {
// console.log(this.props);
    return (
      <>
      <div> 
        <h2 className="video-list__heading">NEXT VIDEOS</h2>
        <section className="video-list">
            {props.dataList.map((content, index) => (
             <Link to={`/videoList/${content.id}`}
             key={index}
             > 
                <VideoElement
                    identifier={content.id} 
                    title={content.title} 
                    channel={content.channel}
                    img={content.image}            
                    getId={props.getId}
                />
                 </Link> 
            ))}
        </section>
        </div>
      </>
    );
  }
  
  export default VideoList;