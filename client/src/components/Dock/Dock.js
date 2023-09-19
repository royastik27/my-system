import { Link } from 'react-router-dom';

import './Dock.css';

import homeIcon from './../../assets/icons/home.png';
import clockIcon from './../../assets/icons/clock.png';
import notesIcon from './../../assets/icons/notes.png';
import settingsIcon from './../../assets/icons/settings.png';

function Dock() {

  return (
    <div id="dock-container">
        <div id="dock">
            <Link to="/"><img src={homeIcon} ></img></Link>
            <Link to="/timetracker"><img src={clockIcon} ></img></Link>
            <Link to="/notes"><img src={notesIcon} ></img></Link>
            <Link to="/settings"><img src={settingsIcon} ></img></Link>
        </div>
    </div>
  );
}

export default Dock;