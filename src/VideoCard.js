import React , {useState,useEffect,useRef} from 'react'
import './VideoCard.css'

import VideoHeader from './VideoHeader'

const VideoCard = () => {

    const [isVideoPlaying, setVideoPlaying] = useState(false)
    const videoRef = useRef(null)

    const onVideoPress = () => {
        if(isVideoPlaying) {
            videoRef.current.pause()
            setVideoPlaying(false)
        }
        else {
            videoRef.current.play()
            setVideoPlaying(true)
        }
    }

    return (
        <div className="VideoCard">
            <VideoHeader />
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className="video__player"
                src="https://firebasestorage.googleapis.com/v0/b/ig-reels-clone-a175a.appspot.com/o/video_1.mp4?alt=media&token=8a3f2e7d-a17e-484d-95b3-b3d780e8e4eb"
                alt="IG_Video"
            />
        </div>
    )
}

export default VideoCard
