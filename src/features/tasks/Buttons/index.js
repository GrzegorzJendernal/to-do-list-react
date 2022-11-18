import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../List/tasksSlice";
import { StyledButtons, StyledButton } from "./styled";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);

    const dispatch = useDispatch();
    return (
        tasks.length > 0 && (
            <StyledButtons>
                <StyledButton
                    onClick={() => dispatch(toggleHideDone())}
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
}

export default Buttons;