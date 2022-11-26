import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../../common/Header';
import { Main } from '../../../common/Main/styled';
import Section from '../../../common/Section';
import { getTaskById } from '../tasksSlice';

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Main>
            <Header
                title="Szczegóły zadania"
            />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😞"}
                body={<> Ukończono: {task.done ? "Tak" : "Nie"} </>}
            />
        </Main>
    );
}

export default TaskPage;