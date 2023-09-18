import { createContext, useContext, useReducer, useState } from "react";
import PropTypes from "prop-types";

const TaskContext = createContext(null);
const DispatchContext = createContext(null);
const setThemeContext = createContext(null);

export function TaskProvider({ children }) {
  const [theme, setTheme] = useState("light");
  //the first letter shouldn't be capital
  const [task, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <TaskContext.Provider value={task}>
        <DispatchContext.Provider value={dispatch}>
          <setThemeContext.Provider value={{ theme, setTheme }}>
            <div data-theme={theme}>{children}</div>
          </setThemeContext.Provider>
        </DispatchContext.Provider>
      </TaskContext.Provider>
    </>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.elementType,
};
//define custom hook for task and dispatch

export function useTask() {
  return useContext(TaskContext);
}
export function useDispatch() {
  return useContext(DispatchContext);
}
export function useSetTheme() {
  return useContext(setThemeContext);
}

//define the reducer function
function reducer(task, action) {
  switch (action.type) {
    case "added":
      return [
        ...task,
        {
          text: action.text,
          id: action.id,
          done: false,
          theme: "light",
        },
      ];
    case "deleted":
      return task.filter((t) => t.id !== action.id);
    case "edited":
      return task.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
  }
}

//initial value of task state
const initialValue = [
  { id: 0, text: "attend to meeting", done: false },
  { id: 1, text: "coding the new project", done: false },
  {
    id: 2,
    text: "watching better call saul series",
    done: false,
  },
];
