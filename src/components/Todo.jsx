import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : "incompleted"}`}
      >
        {task.task}
      </p>
      <div className="icons">
        <CiEdit onClick={() => editTodo(task.id)} />
        <FaRegTrashAlt onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
