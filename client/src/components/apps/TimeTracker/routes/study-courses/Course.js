import { Link } from 'react-router-dom';

function deleteChapter(id)
{
    console.log(`Deleting chatper ${id}`);
}

function Chapter(props) {

    return (
        <div className="folder row">
            <div className="col-5">
                <i className="me-2 fa-solid fa-folder"></i>
                {props.name}
            </div>

            <div className="col-4">
                <span className="badge bg-danger">
                    {props.sure ? "sure" : "" }
                </span>
                <span className="badge bg-warning text-dark">
                    {props.complete ? "complete" : "" }
                </span>
            </div>

            <div className="col-2">
                <input type="checkbox"
                defaultChecked={props.done}></input>
            </div>

            <div className="col-1">
                <i className="cursor-pointer fa-solid fa-trash"></i>
            </div>
        </div>
    );
}

function Course() {
    return (
        <>
            <h3>Web Engineering</h3>
            <hr></hr>

            <Chapter
                id="1"
                name="1. Introduction"
                sure={true}
                complete={true}
                done={true}
            />

            <Chapter
                id="2"
                name="2. HTML"
                sure={true}
                complete={false}
                done={false}
            />

            <Chapter
                id="3"
                name="3. CSS"
                sure={false}
                complete={true}
                done={false}
            />
        </>
    );
}

export default Course;

/**
 * <input type="checkbox" checked=""></input>
 * Cheked in HTML, but not in ReactJS
**/