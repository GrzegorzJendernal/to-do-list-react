import { nanoid } from "@reduxjs/toolkit";
import React, { FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import Input from "../Input";
import { FormButton, StyledForm } from "./styled";

const Form = () => {
	const [newTaskContent, setNewTaskContent] = useState("");
	const inputRef = useRef<HTMLInputElement | null>(null);
	const dispatch = useDispatch();

	const onFormSubmit = (event: FormEvent) => {
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
		inputRef.current && inputRef.current.focus()
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
			<FormButton>
				Dodaj zadanie
			</FormButton>
		</StyledForm>
	);
};

export default Form;