import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./index";
import user from "@testing-library/user-event";

describe("Navigation", () => {
	it("should navigate to correct page", async() => {
		render(
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>
		);

		const linkToTasks = screen.getByText("Zadania");
		user.click(linkToTasks);

		await waitFor(() => {
			expect(window.location.pathname).toEqual("/zadania");
		});

		const linkToAuthor = screen.getByRole("link", { name: /autor/i });
		user.click(linkToAuthor);

		await waitFor(()=> {
			expect(window.location.pathname).toEqual("/autor")
		});
	});
});
