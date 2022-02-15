import React from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = {
    tasks: [],
    errors: [],
    filtered_tasks: [],
    edit: null,
    loading: true,
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(AppReducer, initialState);

    const getTasks = async () => {
        const response = await axios.get("/tasks");
        dispatch({
            type: "GET_TASKS",
            payload: response.data,
        });
    };

    const filterTasks = (query) => {
        dispatch({
            type: "FILTER_TASKS",
            payload: query,
        });
    };

    const addTask = async (task) => {
        const response = await axios.post("/tasks", task);
        dispatch({
            type: "ADD_TASK",
            payload: response.data,
        });
    };

    const editPull = (task) => {
        dispatch({
            type: "EDIT_PULL",
            payload: task,
        });
    };

    const resetPull = () => {
        dispatch({
            type: "RESET_PULL",
            payload: null,
        });
    };

    const editTask = async (id, task) => {
        const response = await axios.put(`/tasks/${id}`, task);
        dispatch({
            type: "UPDATE_TASK",
            payload: response.data,
        });
    };

    const deleteTask = async (id) => {
        const response = await axios.delete(`/tasks/${id}`);
        dispatch({
            type: "DELETE_TASK",
            payload: id,
        });
    };

    const toggleDone = async (id) => {
        const response = await axios.post(`/tasks/toggle/${id}`);
    };

    return (
        <GlobalContext.Provider
            value={{
                tasks: state.tasks,
                edit: state.edit,
                filtered_tasks: state.filtered_tasks,
                addTask,
                getTasks,
                deleteTask,
                editPull,
                editTask,
                resetPull,
                filterTasks,
                toggleDone,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
