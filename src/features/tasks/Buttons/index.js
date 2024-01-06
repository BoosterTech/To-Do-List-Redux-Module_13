import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonsWrapper } from "./styled";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsAnyTaskDone,
  selectIsEveryTaskDone,
} from "../tasksSlice";

const Buttons = () => {
  const { hideDone } = useSelector(selectTasksState);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isAnyTaskDone = useSelector(selectIsAnyTaskDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();

  return (
    !areTasksEmpty && (
      <ButtonsWrapper>
        <Button
          onClick={() => dispatch(toggleHideDone())}
          disabled={!isAnyTaskDone}
        >
          {" "}
          {hideDone ? "Pokaż" : "Ukryj"} ukończone{" "}
        </Button>
        <Button
          disabled={isEveryTaskDone}
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
