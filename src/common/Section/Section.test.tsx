import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Section from "./index";

describe("Section", () => {
	it("renders correctly with optional content", () => {
		render(
			<Section
				title="Test Title"
				body={<div>Test Body</div>}
				optionalContent={<div>Test Optional Content</div>}
			/>
		);

		expect(screen.getByText("Test Title")).toBeInTheDocument();
		expect(screen.getByText("Test Body")).toBeInTheDocument();
		expect(screen.getByText("Test Optional Content")).toBeInTheDocument();
	});

	it("renders correctly without optional content", () => {
		render(
			<Section
				title="Test Title"
				body={<div>Test Body</div>}
			/>
		);

		expect(screen.getByText("Test Title")).toBeInTheDocument();
		expect(screen.getByText("Test Body")).toBeInTheDocument();
		expect(screen.queryByText("Test Optional Content")).not.toBeInTheDocument();
	});
});
