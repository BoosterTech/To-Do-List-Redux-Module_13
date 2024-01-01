export const exampleTasks = [
  {
    content: "Load the App",
    done: true,
    id: 1,
  },
  {
    content: "Set focus on input field",
    done: false,
    id: 2,
  },
  {
    content: "Add tasks to your list",
    done: false,
    id: 3,
  },
];

export const setInitialTasksToLocalStorage = () => {
  localStorage.setItem("tasksData", JSON.stringify(exampleTasks));
};
