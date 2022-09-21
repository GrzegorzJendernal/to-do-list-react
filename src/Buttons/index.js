import "./style.css";

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <span className="buttons">
            <button className="buttons__button">
                {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button className="buttons__button"
                disabled={props.tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </span>
    )
);

export default Buttons;