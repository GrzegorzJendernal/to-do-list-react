import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";
import { getExampleTask } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExpampleTasks, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const expampleTasks = yield call(getExampleTask);
        yield put(setTasks(expampleTasks));
    } catch (error) {
        const emergencyTask = [{ content: "przykładowe zadanie", done: false, id: "abcd" }];
        yield put(setTasks(emergencyTask));
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExpampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};