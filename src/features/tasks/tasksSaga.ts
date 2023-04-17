import { call, delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getExampleTask } from "../../common/utils/getExampleTasks";
import { saveTasksInLocalStorage } from "../../common/utils/tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import {Task} from "../../common/types/interfaces";

function* fetchExampleTasksHandler() {
	try {
		yield delay(1000);
		const exampleTasks:Task[] = yield call(getExampleTask);
		yield put(setTasks(exampleTasks));
	} catch (error) {
		const emergencyTask: Task[] = [{content: "przykładowe zadanie", done: false, id: "abcd"}];
		yield put(setTasks(emergencyTask));
	}
}

function* saveTasksInLocalStorageHandler() {
	const tasks: Task[] = yield select(selectTasks);
	yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
	yield takeLatest(fetchExampleTasks().type, fetchExampleTasksHandler);
	yield takeEvery("*", saveTasksInLocalStorageHandler);
}