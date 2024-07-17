import './Video.scss';
import VideoList from '../VideoList/VideoList';
function Hero(props) {

    return(
        <>
        
        <video poster={props.currentVideo.image} className='video' controls></video>

        </>
    );
}

export default Hero;