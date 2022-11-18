import { useSelector } from "react-redux";
import { TasksList, ListTask, Content, Button } from "./styled";
import { selectTasks } from "./tasksSlice";

const List = ({ removeTask, toggleTaskDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);

    return (
        <TasksList>
            {tasks.map(task => (
                <ListTask
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => toggleTaskDone(task.id)}
                        toggleDone
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content
                        done={task.done}
                    >
                        {task.content}
                    </Content>
                    <Button
                        onClick={() => removeTask(task.id)}
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