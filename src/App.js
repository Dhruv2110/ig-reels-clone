import React,{useState,useEffect} from 'react'

import './App.css';
import logo from './IG_logo.svg'
import VideoCard from './VideoCard';

import db from './firebase'

function App() {

  const [reels,setReels] = useState([])

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  return (
    <div className="app">
      <h1>IG-Reels-Clone 🚀 </h1>

      <div className="app__top">
        <img
          className="app__logo"
          src={logo}
          alt="IG_Logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {reels.map(({ channel, song, url, likes, shares}) => (

        <VideoCard 
          channel={channel}
          avatarSrc={logo}
          song={song}
          url={url}
          likes={likes}
          shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
