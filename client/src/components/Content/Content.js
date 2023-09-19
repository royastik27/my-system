import { Routes, Route } from 'react-router-dom';

import './Content.css';

import Window from './../Window/Window.js';

function Content() {
    return (
        <div id="content">

            <Routes>
                <Route index element={<h2>Hi!</h2>} />
                <Route path="*" element={<Window />} />
                {/* <Route path="*" element={<p>Route don't match</p>} /> */}
            </Routes>

        </div>
    );
}

export default Content;