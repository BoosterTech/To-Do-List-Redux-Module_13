import React from "react";
import { Button, ListItem, TaskContent, TaskListStyled } from "./styled";

const TaskList = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <TaskListStyled>
    {tasks.map((task, id) => (
      <ListItem key={id} hidden={hideDoneTasks && task.done}>
        <Button done onClick={() => toggleTaskDone(task.id)}>
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

export default TaskList;
