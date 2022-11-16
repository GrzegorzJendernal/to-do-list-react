import { StyledButtons, StyledButton } from "./styled";

const Buttons = ({ hideDone, tasks, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <StyledButtons>
            <StyledButton
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </StyledButton>
            <StyledButton
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </StyledButton>
        </StyledButtons>
    )
);

export default Buttons;