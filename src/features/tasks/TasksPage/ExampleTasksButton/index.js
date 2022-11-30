import { useDispatch } from "react-redux";
import { Button } from "../Buttons/styled";
import { fetchExpampleTasks } from "../../tasksSlice";
import { useState } from "react";

const ExampleTasksButton = () => {
    const [status, setStatus] = useState("OK");
    const dispatch = useDispatch();

    const loadTasks = () => dispatch(fetchExpampleTasks());

    const wait = () => {
        setStatus("loading");
        setTimeout(() => {
            loadTasks();
            setStatus("OK");
        }, 1000);
    };

    if (status === "OK")
        return (
            <Button
                onClick={wait}>
                Pobierz przykładowe zadania
            </Button>
        );

    return (
        <Button
            disabled>
            Ładowanie...
        </Button>
    );
};

export default ExampleTasksButton; 