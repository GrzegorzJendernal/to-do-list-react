import "./style.css";

const Buttons = ({ hideDoneTasks, tasks }) => (
    tasks.length > 0 && (
        <span className="buttons">
            <button className="buttons__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button className="buttons__button"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </span>
    )
);

export default Buttons;