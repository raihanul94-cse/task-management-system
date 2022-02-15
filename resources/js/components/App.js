import React from "react";
import Filter from "./Filter";
import Form from "./Form";
import Task from "./Task";

export default function App() {
    return (
        <>
            <h1 className="text-center">Task Manager</h1>
            <Filter />
            <div className="content">
                <Task />
                <Form />
            </div>
        </>
    );
}
