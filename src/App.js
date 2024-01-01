import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { useTasks } from "./useTasks";
import { MainWrapper } from "./MainWrapper/styled";

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDone = () =>
    setHideDoneTasks((hideDoneTasks) => !hideDoneTasks);

  const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } =
    useTasks();

  return (
    <MainWrapper>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        bodyContent={<Form addNewTask={addNewTask} />}
        headerType="section__headerTop"
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        bodyContent={
          <Tasks
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        id="section__flex"
        headerType="section__header"
      />
    </MainWrapper>
  );
}

export default App;
