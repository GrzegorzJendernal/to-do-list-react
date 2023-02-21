import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../queryParamaters";
import { removeTask, selectHideDone, selectTasksByQuery, toggleTaskDone } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { Button, Content, ListTask, StyledLink, TasksList } from "./styled";
import {RootState} from "../../../../core/store";

const List = () => {
	const query = useQueryParameter(searchQueryParamName) as string;
	const tasks = useSelector((state: RootState) => selectTasksByQuery(state, query));
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
						<StyledLink to={`/zadania/${task.id}`}>
							{task.content}
						</StyledLink>
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