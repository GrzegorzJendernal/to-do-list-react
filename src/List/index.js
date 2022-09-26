import "./style.css";

const List = ({ tasks, hideDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id} className={`list__task${task.done && hideDone ? " list__task--hidden" : ""}`}>
                <button className={`list__button list__button--done`}>
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? " list__task--done" : ""}`}>
                    {task.content}
                </span>
                <button className={`list__button list__button--remove`}>
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default List;