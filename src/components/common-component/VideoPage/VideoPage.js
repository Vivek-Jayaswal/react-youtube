import { useEffect, useRef, useState } from "react";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import VideoInfo from "../VideoInfo/VideoInfo";
import Comment from "../CommentInfo/Comment";
import "./videopage.css";
import NavBar from "../../../Navbar/Navbar";
import RecommendedVideo from "../Recommended/RecommendedVideo";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const VideoPage = () => {
    const playerRef = useRef(null);
    const playerInstance = useRef(null);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('videoId');
    const [videoId, setVideoId] = useState(id);

    const channelData = useSelector((state) => state.channeldetails.details);
    const initializePlayer = () => {
        if (playerRef.current && !playerInstance.current) {
            playerInstance.current = new window.YT.Player(playerRef.current, {
                height: '450',
                width: '100%',
                videoId: videoId, 
                playerVars: {
                    autoplay: true,
                    controls: 1,
                },
                events: {
                    onReady: (event) => {
                        event.target.playVideo();
                    },
                },
            });
        } else if (playerInstance.current) {
            playerInstance.current.loadVideoById(videoId);
        }
    };

    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                initializePlayer();
            };
        } else {
            initializePlayer();
        }

        return () => {
            if (playerInstance.current) {
                playerInstance.current.destroy();
                playerInstance.current = null;
            }
        };
    }, [videoId]);

    useEffect(() => {
        setVideoId(id);
    }, [location.search]);

    return (
        <>
            <NavBar />
            <div className="yt-player-page">
                <div className="left-part-yt">
                    {/* YouTube Player */}
                    <div ref={playerRef}></div>

                    {/* Video information and comments */}
                    <VideoInfo videoId={videoId} />
                    <Comment videoId={videoId} />
                </div>
                <div className="right-part-yt">
                    {/* Show recommended videos based on channel name */}
                    <RecommendedVideo channelName={channelData?.snippet?.localized?.title} />
                </div>
            </div>
        </>
    );
};

export default VideoPage;
