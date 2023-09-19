import './MainMenu.css';

function MainMenu() {

  return (
    <div id="main-menu">
        <span className="logo">
            <i className="fa-brands fa-apple"></i>
        </span>

        <span className="app-name prevent-select">
            royastik27
        </span>
        
        <div className="leftmenu">File</div>
        <div className="leftmenu">Edit</div>
        <div className="leftmenu">View</div>
        <div className="leftmenu">Help</div>

        <span className="left">
            <div className="rightmenu">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="rightmenu">
                <i className="fa-solid fa-wifi"></i>
            </div>
            <div className="rightmenu">
                <i className="fa-solid fa-battery-three-quarters"></i>
            </div>
            <div className="rightmenu">
                <i className="fa-solid fa-sliders"></i>
            </div>
            <div className="rightmenu">
                Mon June 22  9:41 AM
            </div>
        </span>
    </div>
  );
}

export default MainMenu;