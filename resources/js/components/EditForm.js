import React from "react";
import { GlobalContext } from "../context/GlobalState";

const formatDate = (str) => {
    const date = new Date(str);
    return date.toISOString().slice(0,19);
};

export default function EditForm({ task }) {
    const [title, setTitle] = React.useState(task.title);
    const [dueDate, setDueDate] = React.useState(formatDate(task.dueDate));
    const [duration, setDuration] = React.useState(task.duration);
    const [type, setType] = React.useState(task.type);

    const { editTask, resetPull } = React.useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(task.id ,{
            title,
            dueDate,
            duration,
            type,
        });
    };

    const handleCancel = (e) => {
        e.preventDefault();
        resetPull();
    };

    React.useEffect(() => {
        setTitle(task.title);
        setDueDate(formatDate(task.dueDate));
        setDuration(task.duration);
        setType(task.type);
    }, [task]);

    return (
        <div className="task-widget">
            <div className="panel">
                <div className="panel-body">
                    <h3 className="panel-title">Edit Task</h3>
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
                            Update and Save
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
