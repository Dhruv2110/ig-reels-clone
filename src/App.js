import './App.css';
import logo from './IG_logo.svg'
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="App">
      <h1>IG-Reels-Clone 🚀 </h1>

      <div className="App__top">
        <img
          className="App__logo"
          src={logo}
          alt="IG_Logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="App__videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
