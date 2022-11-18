import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/List/tasksSlice";

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});