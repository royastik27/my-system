import { Routes, Route } from 'react-router-dom';

import './Window.css';

import TimeTrackerTopbar from '../apps/TimeTracker/TimeTrackerTopbar';
import TimeTrackerSidebar from '../apps/TimeTracker/TimeTrackerSidebar.js';
import TimeTrackerRightbar from '../apps/TimeTracker/TimeTrackerRightbar';
import TimeTrackerTopBar from '../apps/TimeTracker/TimeTrackerTopbar';

function Window() {
    return (
        <div id="window" className="row">

            <div id="window-sidebar" className="col-3">
                <div id="three-menu">
                    <span className="close"><i className="fa-solid fa-xmark"></i></span>
                    <span className="minimize"><i className="fa-solid fa-window-minimize"></i></span>
                    <span className="full-screen"><i className="fa-solid fa-up-right-and-down-left-from-center"></i></span>
                </div>

                <Routes>
                    <Route index element={<TimeTrackerSidebar />} />
                    <Route path="timetracker/*" element={<TimeTrackerSidebar />} />
                </Routes>
            </div>

            <div id="window-rightbar" className="col-9">

                <div className="top">
                    <button><i className="fa-solid fa-angle-left"></i></button>
                    <button><i className="fa-solid fa-angle-right"></i></button>

                    <span id="window-name">Time Tracker</span>

                    <div className="right">
                        <Routes>
                            <Route path="timetracker/*" element={<TimeTrackerTopBar />} />                        
                        </Routes>
                    </div>
                </div>

                <div className="down">

                    <Routes>
                        <Route index element={<TimeTrackerRightbar />} />
                        <Route path="/timetracker/*" element={<TimeTrackerRightbar />} />
                        <Route path="*" element={<h2>Opps! not found</h2>} />
                    </Routes>
                    
                </div>
                
            </div>
        </div>
    );
}

export default Window;