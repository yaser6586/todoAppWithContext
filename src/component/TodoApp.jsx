import { TaskProvider } from "./TaskProvider";
import Tasklist from "./Tasklist";
function TodoApp() {
  return (
    <>
      <TaskProvider>
        <Tasklist />
      </TaskProvider>
    </>
  );
}

export default TodoApp;
