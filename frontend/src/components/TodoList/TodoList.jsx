import TodoItem from "../TodoItem/TodoItem.jsx";
import s from "./TodoList.module.css";

const TodoList = ({todos, onToggleStatus, onDeleteTodo, isLoading}) => {

    return (
      <ul className={s.list}>
        {isLoading && <p className={s.loading}>Loading todos...</p>}
        {!isLoading && todos.length === 0 && (
          <p className={s.empty}>Todo list is empty.</p>
        )}
        {!isLoading &&
          todos.length > 0 &&
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                taskText={todo.text}
                taskStatus={todo.status}
                onToggleStatus={onToggleStatus}
                onDeleteTodo={onDeleteTodo}
              />
            );
          })}
      </ul>
    );
}

export default TodoList;