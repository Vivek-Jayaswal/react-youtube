import { useEffect, useState } from "react";
import "./Home.scss"
import HomeMiddleWare from "./HomeMiddleWare.js"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [quary,setQuary] = useState("")
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector(state => state.homeSlice.product.items);

    const handleOnClick = (videoId) => {
        navigate(`/video-page?videoId=${videoId}`);
    }
    
    useEffect(() => {
        setLoading(true);
        dispatch(HomeMiddleWare(quary));
        setLoading(false);
    },[]);
    
    return (
        <div className="home">
            {
               data?.map((item,idx) => {                
                    return(
                        <div className="video-card" key={idx} onClick={() => handleOnClick(item.id.videoId)}>
                            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                            <p>{item.snippet.title}</p>
                        </div>
                    )
               })
            }
        </div>
    )
}
export default Home;