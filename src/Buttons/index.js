import React from "react";
import { Button, ButtonsWrapper } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <ButtonsWrapper>
      <Button
        onClick={toggleHideDone}
        disabled={!tasks.some(({ done }) => done)}
      >
        {" "}
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone{" "}
      </Button>
      <Button disabled={tasks.every(({ done }) => done)} onClick={setAllDone}>
        {" "}
        Ukończ wszystkie{" "}
      </Button>
    </ButtonsWrapper>
  );

export default Buttons;
