import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasks: getTasksFromLocalStorage(),
		hideDone: false,
		loading: false,
	},
	reducers: {
		addTask: ({tasks}, {payload: task}) => {
			tasks.push(task);
		},
		toggleHideDone: state => {
			state.hideDone = !state.hideDone;
		},
		toggleTaskDone: ({tasks}, {payload: taskId}) => {
			const index = tasks.findIndex(({id}) => id === taskId);
			tasks[index].done = !tasks[index].done;
		},
		removeTask: ({tasks}, {payload: taskId}) => {
			const index = tasks.findIndex(({id}) => id === taskId);
			tasks.splice(index, 1);
		},
		setAllDone: ({tasks}) => {
			tasks.forEach(task => task.done = true);
		},
		fetchExpampleTasks: (state) => {
			state.loading = true;
		},
		setTasks: (state, {payload: tasks}) => {
			state.tasks = tasks;
			state.loading = false;
		},
	},
});

export const {
	addTask,
	toggleHideDone,
	toggleTaskDone,
	removeTask,
	setAllDone,
	fetchExpampleTasks,
	setTasks,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({done}) => done);
export const secelctIsLoading = state => selectTasksState(state).loading;

export const getTaskById = (state, taskId) =>
	selectTasks(state).find(({id}: TaskParams) => id === taskId);

export const selectTasksByQuery = (state, query) => {
	const tasks = selectTasks(state);
	
	if (!query || query.trim() === "") {
		return tasks;
	}
	
	
	return (
		selectTasks(state).filter(({content}) =>
			content.toUpperCase().includes(query.trim().toUpperCase()))
	);
};

export default tasksSlice.reducer;