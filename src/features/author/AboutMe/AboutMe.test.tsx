import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import AboutMe from "./index";

describe("AboutMe", () => {
	test("renders without errors", () => {
		render(<AboutMe/>);
	});

	test("opens link in new tab", () => {
		render(<AboutMe />);
		const link = screen.getByTitle("najlepszy kurs programowania");
		expect(link).toHaveAttribute("target", "_blank");
		expect(link).toHaveAttribute("rel", "noreferrer noopener");
	});
});