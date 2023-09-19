import { Routes, Route } from 'react-router-dom';

import StudyStatus from './routes/study-status/StudyStatus.js';
import StudyRead from './routes/study-read/StudyRead.js';
import StudyCourses from './routes/study-courses/StudyCourses.js';
import Course from './routes/study-courses/Course.js';
import StudyTargets from './routes/study-targets/StudyTargets.js';

function TimeTrackerRightbar() {
    return (
        <Routes>
            <Route index element={<StudyStatus />} />
            <Route path="study" element={<StudyStatus />} />
            <Route path="study/read" element={<StudyRead />} />
            <Route path="study/courses" element={<StudyCourses />} />
            <Route path="study/courses/:id" element={<Course />} />
            <Route path="study/targets" element={<StudyTargets />} />
        </Routes>
    );
}

export default TimeTrackerRightbar;