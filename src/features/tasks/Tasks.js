import React, { useState } from "react";
import Form from "./Form"
import TaskList from "./TaskList"
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";
import { MainWrapper } from "../../common/MainWrapper/styled";

function Tasks() {
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
          <TaskList
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

export default Tasks;
