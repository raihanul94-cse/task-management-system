import React from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddForm() {
    const [title, setTitle] = React.useState("");
    const [dueDate, setDueDate] = React.useState("");
    const [duration, setDuration] = React.useState(0);
    const [type, setType] = React.useState("");

    const { addTask } = React.useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
       if (title.length === 0){
           alert("Task title required");
       }else {
        addTask({
            title,
            dueDate,
            duration,
            type,
        });
       }
    };

    return (
        <div className="task-widget">
            <div className="panel">
                <div className="panel-body">
                    <h3 className="panel-title">Add New Task</h3>
                    <form>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter task title"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="datetime-local"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="number"
                                className="form-control"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                placeholder="Enter duration"
                            />
                        </div>
                        <div className="form-group">
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="form-control"
                                placeholder=""
                            >
                                <option value="Call">Call</option>
                                <option value="Deadline">Deadline</option>
                                <option value="Email">Email</option>
                                <option value="Meeting">Meeting</option>
                            </select>
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
