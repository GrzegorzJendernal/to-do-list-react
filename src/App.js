import React, { useState, useEffect } from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { Main } from "./Main/styled";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));

  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task, done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks =>
      [...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
      ]);
  };

  return (
    <Main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        optionalContent={<Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          setAllDone={setAllDone} />}
        body={<List
          tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone} />}
      />
    </Main>
  );
}

export default App;
