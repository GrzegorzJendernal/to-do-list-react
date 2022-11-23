import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { getExampleTask } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExpampleTasks, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const expampleTasks = yield call(getExampleTask);
        yield put(setTasks(expampleTasks));
    } catch (error) {
        yield call(console.log, error);
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExpampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}