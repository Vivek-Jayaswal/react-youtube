import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.js"
import Shorts from "./components/Shorts.js"
import Subscription from "./components/Subscription.js"
import YourChannel from "./components/YourChannel.js"
import History from "./components/History.js"
import PlayList from "./components/PlayList.js"
import YourVideos from "./components/YourVideos.js"
import WatchLater from "./components/WatchLater.js"
import LikedVideos from "./components/LikedVideos.js"
import Trending from "./components/Trending.js"
import Shopping from "./components/Shopping.js"
import Music from "./components/Music.js"
import Films from "./components/Films.js"
import Live from "./components/Live.js"
import Gaming from "./components/Gaming.js"
import News from "./components/News.js"
import Sport from "./components/Sport.js"
import Course from "./components/Course.js"
import Fashion from "./components/Fashion.js"
import Podcasts from "./components/Podcasts.js"
import YouTubePremium from "./components/YouTubePremium.js"
import YouTubeStudio from "./components/YouTubeStudio.js"
import YouTubeMusic from "./components/YouTubeMusic.js"
import YouTubeKids from "./components/YouTubeKids.js"
import YouTubePlayerLayout from "./PlayerLayout/YouTubePlayerLayout .js"
import VideoPage from "./components/common-component/VideoPage/VideoPage.js";
import ChannelInfo from "./components/common-component/ChannelInfo/ChannelInfo.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="video-page" element={<VideoPage />} />
        <Route path="" element={<YouTubePlayerLayout />}>
          <Route path="" element={<Home />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="channel-info" element={<ChannelInfo />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="yourchannel" element={<YourChannel />} />
          <Route path="history" element={<History />} />
          <Route path="playlist" element={<PlayList />} />
          <Route path="yourvideos" element={<YourVideos />} />
          <Route path="watchlater" element={<WatchLater />} />
          <Route path="likedvideos" element={<LikedVideos />} />
          <Route path="trending" element={<Trending />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="music" element={<Music />} />
          <Route path="films" element={<Films />} />
          <Route path="live" element={<Live />} />
          <Route path="gaming" element={<Gaming />} />
          <Route path="news" element={<News />} />
          <Route path="sport" element={<Sport />} />
          <Route path="course" element={<Course />} />
          <Route path="fashion-beauty" element={<Fashion />} />
          <Route path="podcast" element={<Podcasts />} />
          <Route path="YouTube-Premium" element={<YouTubePremium />} />
          <Route path="YouTube-Studio" element={<YouTubeStudio />} />
          <Route path="YouTube-Music" element={<YouTubeMusic />} />
          <Route path="YouTube-Kids" element={<YouTubeKids />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App;