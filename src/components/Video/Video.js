import './Video.scss';
import { useState } from 'react';
import VideoList from '../VideoList/VideoList';
import data from '../../data/video-details.json';
function Hero(props) {
    const [img, setImg] = useState(
        {data}
      );
    return(
        <>
        
        <video poster={img.data[0].image} className='video' controls></video>

        </>
    );
}

export default Hero;