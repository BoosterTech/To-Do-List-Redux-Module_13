import React, { useRef, useState } from "react";
import { Button, Input, TaskForm } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const newTaskContentTrimmed = newTaskContent.trim();

  const dispatch = useDispatch();

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!newTaskContentTrimmed) {
      return;
    }
    dispatch(
      addTask({
        content: newTaskContentTrimmed,
        done: false,
        id: nanoid(),
      })
    );
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
