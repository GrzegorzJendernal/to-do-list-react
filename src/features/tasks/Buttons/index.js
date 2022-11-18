import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../List/tasksSlice";
import { StyledButtons, StyledButton } from "./styled";

const Buttons = () => {
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
                    onClick={() => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </StyledButton>
            </StyledButtons>
        )
    );
}

export default Buttons;