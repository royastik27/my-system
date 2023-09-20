import { Routes, Route } from 'react-router-dom';

import StudyCoursesTop from './routes/study-courses/StudyCoursesTop.js';
import CourseTop from './routes/study-courses/CourseTop.js';

function TimeTrackerTopBar() {
    return (
        <>
            <Routes>
                <Route path="study/courses" element={<StudyCoursesTop />} />
                <Route path="study/courses/:id" element={<CourseTop />} />
            </Routes>

            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </>
    );
}

export default TimeTrackerTopBar;