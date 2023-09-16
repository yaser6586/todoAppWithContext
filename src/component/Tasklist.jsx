import { useTask } from "./TaskProvider";

function Tasklist() {
  return (
    <div className="flex-col justify-center">
      <Task />
    </div>
  );
}

export default Tasklist;

export function Task() {
  const task = useTask();
  // const dispatch = useDispatch();

  return (
    <>
      {task.map((task) => (
        <div key={task.id} className="my-5 w-3/4 m-auto">
          <div className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div className="flex  justify-between ">
              <div className="m-auto w-2/3">{task.text}</div>
              <div className="">
                <button class="btn btn-primary">Primary</button>
                <button class="btn btn-error">Primary</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
