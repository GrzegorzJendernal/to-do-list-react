import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Buttons/styled";
import { fetchExpampleTasks, secelctIsLoading } from "../../tasksSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(secelctIsLoading);

    return (
        <Button
            onClick={() => dispatch(fetchExpampleTasks())}
            disabled={isLoading}
        >
            {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    );
};

export default ExampleTasksButton; 