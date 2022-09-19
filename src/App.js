import React from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";

const tasks = [
  { id: 1, content: "niewykonane zadanie", done: true },
  { id: 2, content: "wykonane zadanie", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <div>
      <main className="main">
        <header>
          <h1>Lista zadań</h1>
        </header>
        <section className="main__section">
          <h2 className="main__subheader">Dodaj nowe zadanie</h2>
          <Form />
        </section>
        <section className="main__section main__section--bottom">
          <h2 className="main__subheader main__subheader--bottom">Lista zadań <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} /></h2>
          <List tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </section>
      </main>
    </div>
  );
}

export default App;
