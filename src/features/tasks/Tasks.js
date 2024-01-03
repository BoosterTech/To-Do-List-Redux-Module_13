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

  const { removeTask, setAllDone } = useTasks();

  return (
    <MainWrapper>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        bodyContent={<Form />}
        headerType="section__headerTop"
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        bodyContent={<TaskList />}
        id="section__flex"
        headerType="section__header"
      />
    </MainWrapper>
  );
}

export default Tasks;
