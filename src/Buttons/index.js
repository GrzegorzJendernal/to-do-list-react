import "./style.css";

const Buttons = ({ hideDone, tasks, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <span className="buttons">
            <button
                onClick={toggleHideDone}
                className="buttons__button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                onClick={setAllDone}
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </span>
    )
);

export default Buttons;