import { useState, useRef } from "react";
import { StyledForm, Input, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() === "") {
            setNewTaskContent("");
            return;
        };

        addNewTask(newTaskContent.trim());
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
                onChange={({ target }) => setNewTaskContent(target.value)}
                required
            />
            <FormButton onClick={() => inputRef.current.focus()}>Dodaj zadanie</FormButton>
        </StyledForm>
    );
};

export default Form;