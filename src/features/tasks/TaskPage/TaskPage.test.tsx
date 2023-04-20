import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskPage from "./index";
import { MemoryRouter, Route } from "react-router-dom";
import store from "../../../core/store";
import { Provider } from "react-redux";

describe("TaskPage", () => {
	test("displays a message when task id is incorrect", () => {
		render(
			<Provider store={store}>
			<MemoryRouter initialEntries={[`/tasks/non-existing-id`]}>
				<Route path="/tasks/:id">
					<TaskPage />
				</Route>
			</MemoryRouter>
		</Provider>
		);
		expect(screen.getByText("Nie znaleziono zadania 😞")).toBeInTheDocument();
	});
});
