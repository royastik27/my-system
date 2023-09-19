import { Link } from 'react-router-dom';

function CourseFolder({ id, name, credit, percent }) {
    return (
        <Link to={id}>
            <div className="folder row">
                <div className="col-7">
                    <i className="me-2 fa-solid fa-folder"></i>
                    {name}
                </div>
                <div className="col-3">
                    ${credit}
                </div>
                <div className="col-2">
                    {percent}%
                </div>
            </div>
        </Link>
    );
}

function StudyCourses() {
    return (
        <>
            <CourseFolder
                id="123423"
                name="Switching Devices and Pulse Techniques"
                credit="2"
                percent="30"
            />
            <CourseFolder
                id="123423"
                name="Web Programming"
                credit="3"
                percent="70"
            />
            <CourseFolder
                id="123423"
                name="Statistics"
                credit="3"
                percent="80"
            />
            
            <br></br>
            
            <button class="gray-button">
                <i class="fa-solid fa-plus"></i>
            </button>
        </>
    );
}

export default StudyCourses;