import React from 'react';
import { useSelector } from 'react-redux';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Main } from "../../common/Main/styled";
import { selectTasks } from './List/tasksSlice';

function Tasks() {
  const { tasks } = useSelector(selectTasks);

  return (
    <Main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        optionalContent={<Buttons />}
        body={<List />}
      />
    </Main>
  );
}

export default Tasks;