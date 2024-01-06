import React from "react";
import { Button, ListItem, TaskContent, TaskListStyled } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <TaskListStyled>
      {tasks.map((task, id) => (
        <ListItem key={id} hidden={hideDone && task.done}>
          <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <TaskContent done={task.done}>{task.content}</TaskContent>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </Button>
        </ListItem>
      ))}
    </TaskListStyled>
  );
};

export default TaskList;
