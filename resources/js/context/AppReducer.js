export default (state, action) => {
    switch (action.type) {
        case "GET_TASKS":
            return {
                ...state,
                tasks: action.payload,
            };
        case "ADD_TASK":
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
            };
        case "EDIT_PULL":
            return {
                ...state,
                edit: state.tasks.find((task) => task.id === action.payload),
            };
        case "UPDATE_TASK":
            const newTask = state.tasks.filter(
                (task) => task.id !== action.payload.id
            );
            newTask.push(action.payload);
            return {
                ...state,
                tasks: newTask,
            };
        case "FILTER_TASKS":
            const query = action.payload;
            const startDate = new Date(query.startDate);
            const endDate = new Date(query.endDate);
            return {
                ...state,
                filtered_tasks: state.tasks.filter((task) => {
                    const date = new Date(task.dueDate);
                    return (
                        task.title === query.keyword ||
                        task.type === query.keyword ||
                        (date >= startDate && date <= endDate) ||
                        task.type === query.type
                    );
                }),
            };
        case "RESET_PULL":
            return {
                ...state,
                edit: action.payload,
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        default:
            return state;
    }
};
