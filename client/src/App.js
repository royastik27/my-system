// JS Dependencies
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/fontawesome.min.css';
import './assets/css/solid.min.css';
import './assets/css/brands.min.css';

// JS My Library
import setWallpaper from './assets/js/wallpaper.js';

// CSS Dependencies
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS My Library
import './App.css';

// Components
import MainMenu from './components/MainMenu/MainMenu.js';
import Dock from './components/Dock/Dock.js';
import Content from './components/Content/Content.js';

// Run-On-Load Functions
setWallpaper(3);

function App() {

  return (
    <div id="container" className="container-fluid">      
      <div id="child-container" className="row">

        <MainMenu />

        <div id="main-content">
          <Content />
        </div>

        <Dock />

      </div>
    </div>
  );
}

export default App;
