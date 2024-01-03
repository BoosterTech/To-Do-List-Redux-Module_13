import React from "react";
import { Button, ListItem, TaskContent, TaskListStyled } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <TaskListStyled>
      {tasks.map((task, id) => (
        <ListItem key={id} hidden={hideDone && task.done}>
          <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <TaskContent done={task.done}>{task.content}</TaskContent>
          <Button remove onClick={() => removeTask(task.id)}>
            🗑️
          </Button>
        </ListItem>
      ))}
    </TaskListStyled>
  );
};

export default TaskList;
