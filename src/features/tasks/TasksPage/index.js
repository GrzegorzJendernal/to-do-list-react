import Header from "../../../common/Header";
import { Main } from "../../../common/Main/styled";
import Section from "../../../common/Section";
import Buttons from "./Buttons";
import ExampleTasksButton from "./ExampleTasksButton";
import Form from "./Form";
import List from "./List";
import Search from "./Search";


const TasksPage = () => (
	<Main>
		<Header
			title="Lista zadań"
		/>
		<Section
			title="Dodaj nowe zadanie"
			optionalContent={<ExampleTasksButton/>}
			body={<Form/>}
		/>
		<Section
			title="Wyszukiwarka"
			body={<Search/>}
		/>
		<Section
			title="Lista zadań"
			optionalContent={<Buttons/>}
			body={<List/>}
		/>
	</Main>
);

export default TasksPage;