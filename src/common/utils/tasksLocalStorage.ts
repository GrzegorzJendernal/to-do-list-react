import {Task} from "../types/interfaces";

const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks: Task[]) =>
	localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
	JSON.parse(localStorage.getItem(localStorageKey) as string) || [];
