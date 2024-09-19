import { useState, useEffect } from "react";
import { API_KEY } from "../API/Api";
import { BASE_URL } from "../BaseURL/BaseURL";
import "./comment.css";

const Comment = ({ videoId }) => {
    const [comment, setComment] = useState(null);
    const [loading, setLoading] = useState(false);
    const [likeStatus, setLikeStatus] = useState({}); 
    
    const toggleLike = (commentId) => {
        setLikeStatus((prevState) => ({
            ...prevState,
            [commentId]: {
                like: !prevState[commentId]?.like,   
                dislike: false                       
            }
        }));
    };

    const toggleDislike = (commentId) => {
        setLikeStatus((prevState) => ({
            ...prevState,
            [commentId]: {
                like: false,                         
                dislike: !prevState[commentId]?.dislike 
            }
        }));
    };

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
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/commentThreads?key=${API_KEY}&part=snippet&videoId=${videoId}&maxResults=25`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setComment(data.items);
            } catch (error) {
                console.log("Error in loading comment", error);
            } finally {
                setLoading(false);
            }
        };

        if (videoId) {
            setLoading(true);
            fetchData();
        }
    }, [videoId]);

    if (loading) {
        return (<h2>Loading comments...</h2>);
    }

    return (
        <div className="comment-container">
            <h1>{comment && <p>{comment.length} Comments</p>}</h1>
            {
                comment !== null && comment.length > 0 ?
                    <>
                        {
                            comment.map((item, idx) => {
                                const commentId = item.id;
                                const isLiked = likeStatus[commentId]?.like;                                
                                const isDisliked = likeStatus[commentId]?.dislike;

                                return (
                                    <div className="comment" key={idx}>
                                        <div className="user-image">
                                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="image" />
                                        </div>
                                        <div className="user-info">
                                            <div className="name-comment">
                                                <p>{item.snippet.topLevelComment.snippet.authorDisplayName}</p>
                                                <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                                            </div>
                                            <div className="user-intraction">
                                                <div className="likedislike">
                                                    <span 
                                                        className="material-icons" 
                                                        style={{ color: isLiked ? "blue" : "gray" }} 
                                                        onClick={() => toggleLike(commentId)}>
                                                        thumb_up
                                                    </span>
                                                    <p>{formatNumber(item.snippet.topLevelComment.snippet.likeCount)}</p>
                                                    <span 
                                                        className="material-icons" 
                                                        style={{ color: isDisliked ? "blue" : "gray" }} 
                                                        onClick={() => toggleDislike(commentId)}>
                                                        thumb_down
                                                    </span>
                                                </div>
                                                <span>Reply</span>
                                            </div>
                                            <div className="reply">
                                                <span className="material-icons">keyboard_arrow_down</span>
                                                <div>
                                                    <p>{item.snippet.totalReplyCount}</p>
                                                    <p>Replies</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </> : <p>No comments are available</p>
            }
        </div>
    );
};

export default Comment;
