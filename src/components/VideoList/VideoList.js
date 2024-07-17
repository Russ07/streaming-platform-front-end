import "./VideoList.scss";
// import data from '../../data/video-details.json'
import VideoElement from "../VideoElement/VideoElement";

function VideoList(props) {
// console.log(this.props);
    return (
      <>
      <div> 
        <h2 className="video-list__heading">NEXT VIDEOS</h2>
        <section className="video-list">
            {props.dataList.map((content, index) => (
                <VideoElement
                    key={index}
                    identifier={content.id} 
                    title={content.title} 
                    channel={content.channel}
                    img={content.image}            
                    getId={props.getId}
                />
            ))}
        </section>
        </div>
      </>
    );
  }
  
  export default VideoList;