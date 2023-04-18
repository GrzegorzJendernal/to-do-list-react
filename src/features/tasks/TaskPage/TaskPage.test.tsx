import React from "react";
import { render, screen } from '@testing-library/react';
import TaskPage from "./index";

describe("TaskPage", () => {
	test("displays a message when task id is incorrect", () => {
		render(<TaskPage/>);
		expect(screen.getByText("Nie znaleziono zadania")).toBeInTheDocument();
	})
});