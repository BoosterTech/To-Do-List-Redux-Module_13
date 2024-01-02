import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";
import { MainWrapper } from "../../common/MainWrapper/styled";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const tasks = useSelector(selectTasks);

  const { removeTask, toggleTaskDone, setAllDone, addNewTask } = useTasks();

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
        extraHeaderContent={<Buttons tasks={tasks} setAllDone={setAllDone} />}
        bodyContent={
          <TaskList
            tasks={tasks}
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
