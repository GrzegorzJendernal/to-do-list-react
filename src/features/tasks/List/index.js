import { TasksList, ListTask, Content, Button } from "./styled";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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

export default List;