import { useState } from "react";
import { useTask, useDispatch } from "./TaskProvider";
import PropTypes from "prop-types";

function Tasklist() {
  const task = useTask();
  return (
    <div className="flex justify-center ">
      <div className="overflow-x-auto m-auto max-w-7xl ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>todo</th>
              <th>done</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {/* this map would generate the table contents by Task component */}
            {task.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasklist;

export function Task({ task }) {
  // this state shows if we click edit button or not
  const [isEdit, setIsEdit] = useState(false);
  //  this variable would change by click between edit and save button
  let content;
  const dispatch = useDispatch();

  // handel delete button function
  function handleDelete(id) {
    dispatch({
      type: "deleted",
      id: id,
    });
  }
  //content show when we click edit
  if (isEdit === false) {
    content = (
      <>
        <th>{task.id + 1}</th>
        <td>{task.text}</td>
        <td>
          <input
            type="checkbox"
            checked={task.done}
            className="checkbox checkbox-secondary"
            onChange={(e) =>
              dispatch({
                type: "edited",
                // it return completely a new task state  but done field is changed by user
                task: { ...task, done: e.target.checked },
              })
            }
          />
        </td>
        <td>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => setIsEdit(true)}
          >
            edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-outline btn-secondary"
            onClick={() => handleDelete(task.id)}
          >
            delete
          </button>
        </td>
      </>
    );
  } else {
    content = (
      <>
        <th></th>
        <td>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            value={task.text}
            onChange={(e) => {
              dispatch({
                type: "edited",
                // it return completely a new task state  but text field is being changed by user
                task: {
                  ...task,
                  text: e.target.value,
                },
              });
            }}
          />
        </td>
        <td></td>
        <td>
          <button
            className="btn btn-outline btn-info"
            onClick={() => setIsEdit(false)}
          >
            save
          </button>
        </td>
        <td></td>
      </>
    );
  }
  return <tr>{content}</tr>;
}

Task.propTypes = {
  task: PropTypes.arrayOf(PropTypes.object),
};
