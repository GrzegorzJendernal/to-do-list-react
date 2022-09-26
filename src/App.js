import React from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";

const tasks = [
  { id: 1, content: "niewykonane zadanie", done: false },
  { id: 2, content: "wykonane zadanie", done: true },
];

const hideDone = false;

function App() {
  return (
    <Main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        optionalContent={<Buttons tasks={tasks} hideDone={hideDone} />}
        body={<List tasks={tasks} hideDone={hideDone} />}
      />
    </Main >
  );
}

export default App;
