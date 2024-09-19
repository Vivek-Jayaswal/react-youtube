import { useEffect, useState } from "react";
import { BASE_URL } from "../BaseURL/BaseURL";
import { API_KEY } from "../API/Api";
import "./recommend.css"
import { useNavigate } from "react-router-dom";

const RecommendedVideo = ({ channelName }) => {

    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();


    const handleRecomendedNavigation = (videoId) => {
        navigate(`/video-page?videoId=${videoId}`);
        console.log("click");
        
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/search?key=${API_KEY}&part=snippet&q=${channelName}&type=video&maxResults=20&videoDuration=long`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const data = await response.json();
                setVideo(data.items)
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false)
            }
        }

        if (channelName) {
            setLoading(true);
            fetchData();
        }
    }, [channelName]);

    if (loading) {
        return <p>Video are Loading</p>
    }

    return (
        <div className="recomend-video-container">
            {
                video &&
                <>
                    {
                        video.map((item,idx) => {
                            return (
                                <div onClick={() => handleRecomendedNavigation(item.id.videoId)} className="recomend-video" key={idx}>
                                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                                    <div>
                                        <p>{item.snippet.title}</p>
                                        <p>channel :- {item.snippet.channelTitle}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )
}
export default RecommendedVideo;