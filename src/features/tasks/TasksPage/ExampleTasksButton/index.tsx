import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";
import { Button } from "../Buttons/styled";

const ExampleTasksButton = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	
	return (
		<Button
			onClick={() => dispatch(fetchExampleTasks())}
			disabled={isLoading}
		>
			{isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
		</Button>
	);
};

export default ExampleTasksButton; 