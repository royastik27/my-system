import { Link } from "react-router-dom";

function TimeTrackerSidebar() {
    return (
        <>
            <div className="window-sidebar-group">
                <div className="group-name">All</div>

                <Link to="/timetracker" className="group-menu">
                    <i className="fa-solid fa-chart-pie"></i>
                    Discover
                </Link>
                <Link to="settings" className="group-menu">
                    <i className="fa-solid fa-gear"></i>
                    Settings
                </Link>
            </div>

            <div className="window-sidebar-group">
                <div className="group-name">Study</div>

                <Link to="/timetracker/study" className="group-menu">
                    <i className="fa-solid fa-square-poll-vertical"></i>
                    Status
                </Link>
                <Link to="/timetracker/study/read" className="group-menu">
                    <i className="fa-solid fa-book"></i>
                    Read
                </Link>
                <Link to="/timetracker/study/courses" className="group-menu">
                    <i className="fa-solid fa-table-list"></i>
                    Courses
                </Link>
                <Link to="/timetracker/study/targets" className="group-menu">
                    <i className="fa-solid fa-bullseye"></i>
                    Targets
                </Link>
            </div>

            <div className="window-sidebar-group">
                <div className="group-name">Skill</div>

                <Link to="skill" href="" className="group-menu">
                    <i className="fa-solid fa-square-poll-vertical"></i>
                    Status
                </Link>
                <Link to="skill/work" className="group-menu">
                    <i className="fa-solid fa-book"></i>
                    Work
                </Link>
            </div>

            <div className="window-sidebar-group">
                <div className="group-name">Goals</div>

                <Link to="" href="" className="group-menu">
                    <i className="fa-solid fa-square-poll-vertical"></i>
                    Status
                </Link>
                <Link to="" className="group-menu">
                    <i className="fa-solid fa-book"></i>
                    Targets
                </Link>
            </div>
        </>
    );
}

export default TimeTrackerSidebar;