import { NavLink } from "react-router-dom";
import "./sidebar.scss"
const Sidebar = () => {

    const className = ({isActive}) => {
        return isActive ? "active-link" : "";
    }

    return (
        <nav className="sidebar">
            <div className="top">
                <NavLink className={className} to="">Home</NavLink>
                <NavLink className={className} to="/shorts">Shorts</NavLink>
                <NavLink className={className} to="/subscription">Subscription</NavLink>
            </div>
            <div className="second-top">
                <p>You</p>
                <NavLink className={className} to="/yourchannel">Your Channel</NavLink>
                <NavLink className={className} to="/history">History</NavLink>
                <NavLink className={className} to="/playlist">PlayList</NavLink>
                <NavLink className={className} to="/yourvideos">Your videos</NavLink>
                <NavLink className={className} to="/watchlater">Watch Later</NavLink>
                <NavLink className={className} to="/likedvideos">Liked videos</NavLink>
            </div>
            <div className="explore">
                <p>Explore</p>
                <NavLink className={className} to="/trending">Trending</NavLink>
                <NavLink className={className} to="/shopping">Shopping</NavLink>
                <NavLink className={className} to="/music">Music</NavLink>
                <NavLink className={className} to="/films">Films</NavLink>
                <NavLink className={className} to="/live">Live</NavLink>
                <NavLink className={className} to="/gaming">Gaming</NavLink>
                <NavLink className={className} to="/news">News</NavLink>
                <NavLink className={className} to="/sport">Sport</NavLink>
                <NavLink className={className} to="/course">Course</NavLink>
                <NavLink className={className} to="/fashion-beauty">Fashion & Beauty</NavLink>
                <NavLink className={className} to="/podcast">Podcasts</NavLink>
            </div>
            <div className="bottom">
                <p>More from YouTube</p>
                <NavLink className={className} to="/YouTube-Premium">YouTube Premium</NavLink>
                <NavLink className={className} to="/YouTube-Studio">YouTube Studio</NavLink>
                <NavLink className={className} to="/YouTube-Music">YouTube Music</NavLink>
                <NavLink className={className} to="/YouTube-Kids">YouTube Kids</NavLink>
            </div>
        </nav>
    )
}

export default Sidebar;