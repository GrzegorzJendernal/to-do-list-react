import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import Input from "../Input";
import { FormButton, StyledForm } from "./styled";

const Form = () => {
	const [newTaskContent, setNewTaskContent] = useState("");
	
	const inputRef = useRef(null);
	
	const dispatch = useDispatch();
	
	const onFormSubmit = (event) => {
		event.preventDefault();
		
		if (newTaskContent.trim() === "") {
			setNewTaskContent("");
			return;
		}
		
		
		dispatch(addTask({
				content: newTaskContent.trim(),
				done: false,
				id: nanoid(),
			},
		));
		
		setNewTaskContent("");
	};
	
	return (
		<StyledForm
			onSubmit={onFormSubmit}
		>
			<Input
				ref={inputRef}
				value={newTaskContent}
				placeholder="Co jest do zrobienia?"
				onChange={({target}) => setNewTaskContent(target.value)}
				required
				autoFocus
			/>
			<FormButton
				onClick={() => inputRef.current.focus()}
			>
				Dodaj zadanie
			</FormButton>
		</StyledForm>
	);
};

export default Form;