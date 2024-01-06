import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { MainWrapper } from "../../common/MainWrapper/styled";

function Tasks() {
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
