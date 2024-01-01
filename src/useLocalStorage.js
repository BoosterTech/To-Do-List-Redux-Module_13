import { useEffect } from "react";

export const useLocalStorage = (tasks) => {
  useEffect(() => {
    localStorage.setItem("tasksData", JSON.stringify(tasks));
  }, [tasks]);
};
