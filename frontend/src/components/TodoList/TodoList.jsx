import TodoItem from "../TodoItem/TodoItem.jsx";
import s from "./TodoList.module.css";

const TodoList = ({todos, onToggleStatus, onDeleteTodo}) => {

    return (
        <ul className={s.list}>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id }
                        id={todo.id}
                        taskText={todo.text}
                        taskStatus={todo.status}
                        onToggleStatus={onToggleStatus}
                        onDeleteTodo={onDeleteTodo}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList;