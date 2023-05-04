import { render, screen } from "@testing-library/react";
import Header from "./index";
import React from "react";
import '@testing-library/jest-dom';

describe("Header", () => {
	test("render correct heading", () => {
		render(
			<Header title={"test title"} />
		);
		expect(screen.getByText("test title")).toBeInTheDocument();
	});
});