import { useDispatch } from "react-redux";
import { Wrapper, Button } from "../Buttons/styled";
import { fetchExpampleTasks } from "../tasksSlice";

const FetchButton = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button
                onClick={() => dispatch(fetchExpampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </Wrapper>
    );
};

export default FetchButton; 