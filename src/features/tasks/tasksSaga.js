import { takeEvery, call, put } from "redux-saga/effects";
import { getExampleTask } from "./getExampleTasks";
import { fetchExpampleTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const expampleTasks = yield call(getExampleTask);
        yield put(setTasks(expampleTasks));
    } catch (error) {
        yield call(console.log, error);
    }
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExpampleTasks.type, fetchExampleTasksHandler);
}