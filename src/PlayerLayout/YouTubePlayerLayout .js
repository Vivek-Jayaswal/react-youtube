import "./playerlayout.scss";
import NavBar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const YouTubePlayerLayout  = () => {
    return (
        <div className="app">
            <NavBar/>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}
export default YouTubePlayerLayout;