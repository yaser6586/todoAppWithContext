import AddTAsk from "./AddTask";
import DarkToggle from "./DarkTogghle";
import Footer from "./Footer";
import { TaskProvider } from "./TaskProvider";
import Tasklist from "./Tasklist";
function TodoApp() {
  return (
    <TaskProvider>
      <DarkToggle />
      <AddTAsk />
      <Tasklist />
      <Footer />
    </TaskProvider>
  );
}

export default TodoApp;
