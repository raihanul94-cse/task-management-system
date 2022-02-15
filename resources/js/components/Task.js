import React from "react";
import TaskItem from "./TaskItem";
import { GlobalContext } from "../context/GlobalState";

export default function Task() {
    const { tasks, getTasks, deleteTask, editPull, edit, filtered_tasks, toggleDone } = React.useContext(GlobalContext);
    React.useEffect(() => {
        getTasks();
    }, []);
    return (
        <div className="task-list">
            {
                filtered_tasks.length === 0 ? tasks.map((task, index)=>(
                    <TaskItem key={index} id={task.id} title={task.title} dueDate={task.dueDate} duration={task.duration} type={task.type} deleteTask={deleteTask} isDone={task.isDone} editPull={editPull} edit={edit} toggleDone={toggleDone}/>
                )) : filtered_tasks.map((task, index)=>(
                    <TaskItem key={index} id={task.id} title={task.title} dueDate={task.dueDate} duration={task.duration} type={task.type} deleteTask={deleteTask} isDone={task.isDone} editPull={editPull} edit={edit} toggleDone={toggleDone}/>
                ))
            }
        </div>
    );
}
