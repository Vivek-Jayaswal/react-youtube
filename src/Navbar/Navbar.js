import "./navbar.scss"

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <span className="material-icons">menu</span>
            </div>
            <div className="navbar-middle">
                <div className="input">
                    <input type="text" placeholder="Search" />
                    <button className="btn material-icons">search</button>
                </div>
                <button className="material-icons mic">mic</button>
            </div>
            <div className="navbar-right">
                <span className="material-icons">switch_video</span>
                <span className="material-icons">notifications</span>
                <span className="material-icons">account_circle</span>
            </div>
        </div>
    )
}
export default NavBar;