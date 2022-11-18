import React from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Main } from "../../common/Main/styled";


const Tasks = () => (
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

export default Tasks;