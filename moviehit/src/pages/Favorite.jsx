import { useState } from "react";

function UserStatus() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleClick() {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  }

  function handleDelete(index) {
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);
}

  return (
    <>
      <div className="flex flex-col items-center p-6">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition" onClick={handleClick}>Add Task</button>
        </div>
        <ul className="space-y-2 w-64">
          {tasks.map((t, index) => (
            <li className="bg-gray-100 p-2 rounded-lg shadow-sm flex justify-between items-center" key={index}><span>{t}</span> <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700 font-bold">❌</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UserStatus;
