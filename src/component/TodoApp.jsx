import AddTAsk from "./AddTask";
import DarkToggle from "./DarkTogghle";
import { TaskProvider } from "./TaskProvider";
import Tasklist from "./Tasklist";
function TodoApp() {
  return (
    <TaskProvider>
      <DarkToggle />
      <AddTAsk />
      <Tasklist />
    </TaskProvider>
  );
}

export default TodoApp;
