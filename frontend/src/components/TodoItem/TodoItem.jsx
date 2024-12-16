import s from "./TodoItem.module.css";

const TodoItem = ({ id, taskText, taskStatus, onToggleStatus, onDeleteTodo }) => {
  const getTaskStatus = () => (taskStatus ? s.done : "");

  return (
    <li className={`${s.taskItem} ${getTaskStatus()}`}>
      <label className={s.label}>
        <input
          className={`${s.taskInput} ${getTaskStatus()}`}
          type="checkbox"
          checked={taskStatus}
          onChange={()=> onToggleStatus(id, taskStatus)}
        />
        {taskText}
      </label>
      <button className={s.button} type="button" onClick={() => onDeleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
