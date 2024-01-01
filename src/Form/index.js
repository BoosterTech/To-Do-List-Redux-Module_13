import React, { useRef, useState } from "react";
import { Button, Input, TaskForm } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!newTaskContent.trim()) {
      return;
    }

    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    focusInput();
  };

  return (
    <TaskForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </TaskForm>
  );
};

export default Form;
