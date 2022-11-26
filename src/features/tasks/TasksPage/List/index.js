import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TasksList, ListTask, Content, Button } from "./styled";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";

const List = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <TasksList>
            {tasks.map(task => (
                <ListTask
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        toggleDone
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content
                        done={task.done}
                    >
                        <Link to={`/zadania/${task.id}`}>
                            {task.content}
                        </Link>
                    </Content>
                    <Button
                        onClick={() => dispatch(removeTask(task.id))}
                        remove
                    >
                        🗑
                    </Button>
                </ListTask>
            ))}
        </TasksList>
    );
};

export default List;