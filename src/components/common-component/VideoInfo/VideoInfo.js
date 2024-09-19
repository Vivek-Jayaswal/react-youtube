import { useEffect, useState } from "react";
import { BASE_URL } from "../BaseURL/BaseURL";
import { API_KEY } from "../API/Api";
import ChannelDetailsMW from "../../../slice/ChannelDetailsSlice/ChannelDetailsMW";
import { useDispatch, useSelector } from "react-redux";
import "./videoinfo.css";
import { useNavigate } from "react-router-dom";

const VideoInfo = ({ videoId }) => {
    const [data, setData] = useState(null);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const channelData = useSelector((state) => state.channeldetails.details);
    const channelLoading = useSelector((state) => state.channeldetails.loading);
    const [liked, setLiked] = useState(false)
    const [disLiked, setDisLiked] = useState(false);
    const navigate = useNavigate();


    const handleLike = () => {
        setLiked(!liked);
    }

    const handleDislike = () => {
        setDisLiked(!disLiked);
    }

    const formatNumber = (num) => {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + 'b';
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'm';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        } else {
            return num;
        }
    }

    const handleImageClick = ({chhanelid}) => {
        navigate("/channel-info")
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/videos?key=${API_KEY}&part=snippet&part=statistics&id=${videoId}`);
                const data = await response.json();
                setData(data.items[0]);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false)
            }
        }

        if (videoId) {
            setLoading(true);
            fetchData();
        }
    }, [videoId]);

    useEffect(() => {
        if (data) {
            const channelId = data.snippet.channelId;
            dispatch(ChannelDetailsMW(channelId, videoId))
        }
    }, [data]);    

    if (loading) {
        return (
            <div>
                loading
            </div>
        )
    }

    return (
        <>
            {
                data &&
                <div className="video-details">
                    <p className="title">{data.snippet.localized.title}</p>
                    <div className="channel-details">
                        <div className="left">

                            {
                                channelLoading ? <p>image are loading</p> :
                                    <>
                                        <div className="channel-image">
                                            <img src={channelData?.snippet.thumbnails.medium.url} alt="img" onClick={() => handleImageClick(data.snippet.channelId)}/>
                                        </div>
                                        <div>
                                            <p>{channelData?.snippet.title}</p>
                                            <p>{formatNumber(channelData?.statistics.subscriberCount)}</p>
                                        </div>
                                        <button className="channel-btn">Subscribe</button>
                                    </>
                            }

                        </div>
                        <div className="right">
                            <div className="like-dislike btn">
                                <span className="material-icons" style={{ color: liked ? "blue" : "gray" }} onClick={handleLike}>thumb_up</span>
                                <p>{formatNumber(data?.statistics.likeCount)}</p>
                                <span className="material-icons" style={{ color: disLiked ? "blue" : "gray" }} onClick={handleDislike}>thumb_down</span>
                            </div>
                            <div className="share btn">
                                <span className="material-icons">share</span>
                                <p>Share</p>
                            </div>
                            <div className="download btn">
                                <span className="material-icons">download</span>
                                <p>Download</p>
                            </div>
                            <p className="dot btn">...</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default VideoInfo;