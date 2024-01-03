import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonsWrapper } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <ButtonsWrapper>
        <Button
          onClick={() => dispatch(toggleHideDone())}
          // disabled={!tasks.some(({ done }) => done)}
        >
          {" "}
          {hideDone ? "Pokaż" : "Ukryj"} ukończone{" "}
        </Button>
        <Button
          disabled={tasks.every(({ done }) => done)}
          onClick={() => dispatch(setAllDone())}
        >
          {" "}
          Ukończ wszystkie{" "}
        </Button>
      </ButtonsWrapper>
    )
  );
};

export default Buttons;
