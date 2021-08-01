import React , {useState,useRef} from 'react'
import './VideoCard.css'

import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'

const VideoCard = ( {channel,avatarSrc,song,url,likes,shares} ) => {

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
        <div className="videoCard">
            <VideoHeader />
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className="video__player"
                src={url}
                alt="IG_Video"
            />
            <VideoFooter 
                channel={channel}
                avatarSrc={avatarSrc}
                song={song}
                likes={likes}
                shares={shares}/>
        </div>
    )
}

export default VideoCard
