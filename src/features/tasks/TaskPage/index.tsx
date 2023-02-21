import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../../common/Header';
import { Main } from '../../../common/Main';
import Section from '../../../common/Section';
import { getTaskById } from '../tasksSlice';
import { Container, Wrapper } from './styled';
import {RootState} from "../../../core/store";

interface  TaskParams {
	id: string
}

const TaskPage = () => {
	const {id} = useParams<TaskParams>();
	const task = useSelector((state: RootState) => getTaskById(state, id));
	
	return (
		<Main>
			<Header
				title="Szczegóły zadania"
			/>
			<Section
				title={task ? task.content : "Nie znaleziono zadania 😞"}
				body={task ? <Wrapper> <Container>Ukończono:</Container> {task.done ? "Tak" : "Nie"} </Wrapper> : ""}
			/>
		</Main>
	);
}

export default TaskPage;