import React from "react";

export default function TaskItem({ id, title, dueDate, duration, isDone, type, deleteTask, editPull, edit, toggleDone }) {
    return (
        <div className={`task ${edit && edit.id === id && "active-task"}`}>
            <div className="row">
                <div className="left">
                    <div className="task-title">
                        <h3 className={ isDone ? "due-task" : ""}>
                            {title}
                            <span>
                                <i className="fas fa-users"></i> {type}
                            </span>
                        </h3>
                    </div>
                    <div className="task-details">
                        <div className="due-date">
                            <span className="label">- Due Date:</span>
                            {dueDate}
                        </div>
                        <div className="duration">
                            <span className="label">- Duration:</span>
                            {duration}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="action-bar">
                        <ul>
                            <li>
                                <button onClick={toggleDone.bind(this, id)}>
                                    <i className="fas fa-check"></i>
                                </button>
                            </li>
                            <li>
                                <button onClick={editPull.bind(this, id)}>
                                    <i className="fas fa-edit"></i>
                                </button>
                            </li>
                            <li>
                                <button onClick={deleteTask.bind(this, id)} disabled={edit && edit.id === id}>
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
