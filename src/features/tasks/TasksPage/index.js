import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Main } from "../../../common/Main/styled";
import Search from "./Search";
import ExampleTasksButton from "./ExampleTasksButton";


const TasksPage = () => (
  <Main>
    <Header
      title="Lista zadań"
    />
    <Section
      title="Dodaj nowe zadanie"
      optionalContent={<ExampleTasksButton />}
      body={<Form />}
    />
    <Section
      title="Wyszukiwarka"
      body={<Search />}
    />
    <Section
      title="Lista zadań"
      optionalContent={<Buttons />}
      body={<List />}
    />
  </Main>
);

export default TasksPage;