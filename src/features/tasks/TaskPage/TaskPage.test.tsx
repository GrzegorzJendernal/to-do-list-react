import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskPage from "./index";
import { MemoryRouter, Route } from "react-router-dom";
import store from "../../../core/store";
import { Provider } from "react-redux";
import { addTask } from "../tasksSlice";

describe("TaskPage", () => {
	test("displays a message when task id is incorrect", () => {
		const taskId = "non-existing-id";
		render(
			<Provider store={store}>
			<MemoryRouter initialEntries={[`/tasks/${taskId}`]}>
				<Route path="/tasks/:id">
					<TaskPage />
				</Route>
			</MemoryRouter>
		</Provider>
		);
		expect(screen.getByText("Nie znaleziono zadania 😞")).toBeInTheDocument();
	});

	test("renders a task details", () => {
		const taskId = "1";
		const taskContent = "test task";

		store.dispatch(addTask({
			id: taskId,
			content: taskContent,
			done: false
		}));

		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={[`/tasks/${taskId}`]}>
					<Route path="/tasks/:id">
						<TaskPage />
					</Route>
				</MemoryRouter>
			</Provider>
		);
		expect(screen.getByText("Szczegóły zadania")).toBeInTheDocument();
		expect(screen.getByText(taskContent)).toBeInTheDocument();
		expect(screen.getByText("Nie")).toBeInTheDocument();
	})
});
