import { useState } from "react";
import { useDispatch } from "./TaskProvider";

function AddTAsk() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  //define handle submit function
  function handleSubmit() {
    dispatch({
      type: "added",
      id: nextIndex++,
      text: text,
    });
  }
  return (
    <div className="flex w-full justify-center my-20 ">
      <input
        type="text"
        placeholder="add new task"
        className="input input-bordered input-primary w-full max-w-xs"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-outline btn-info mx-5" onClick={handleSubmit}>
        ADD
      </button>
    </div>
  );
}

export default AddTAsk;
let nextIndex = 3;
