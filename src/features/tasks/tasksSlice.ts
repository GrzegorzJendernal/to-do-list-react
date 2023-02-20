import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";
import {RootState} from "../../core/store";

interface Task {
		content: string,
		done: boolean,
		id: string,
}

interface TasksState {
	tasks: Task[],
	hideDone: boolean,
	loading: boolean,
}



const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasks: getTasksFromLocalStorage() as Task[] | [],
		hideDone: false,
		loading: false,
	} as TasksState,
	reducers: {
		addTask: ({tasks}, {payload: task}: PayloadAction<Task>) => {
			tasks.push(task);
		},
		toggleHideDone: state => {
			state.hideDone = !state.hideDone;
		},
		toggleTaskDone: ({tasks}, {payload: taskId}: PayloadAction<string>) => {
			const index = tasks.findIndex(({id}) => id === taskId);
			tasks[index].done = !tasks[index].done;
		},
		removeTask: ({tasks}, {payload: taskId}: PayloadAction<string>) => {
			const index = tasks.findIndex(({id}) => id === taskId);
			tasks.splice(index, 1);
		},
		setAllDone: ({tasks}) => {
			tasks.forEach(task => task.done = true);
		},
		fetchExampleTasks: (state) => {
			state.loading = true;
		},
		setTasks: (state, {payload: tasks}: PayloadAction<Task[]>) => {
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
	fetchExampleTasks,
	setTasks,
} = tasksSlice.actions;

const selectTasksState = (state: RootState) => state.tasks;

export const selectTasks = (state: RootState) => selectTasksState(state).tasks;
export const selectHideDone = (state: RootState) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state: RootState) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state: RootState) => selectTasks(state).every(({done}) => done);
export const selectIsLoading = (state: RootState) => selectTasksState(state).loading;

export const getTaskById = (state: RootState, taskId: string) =>
	selectTasks(state).find(({id}) => id === taskId);

export const selectTasksByQuery = (state: RootState, query: string) => {
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