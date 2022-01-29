import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ tasks, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = tasks.map((item) => {
    const { id, ...itemProps } = item;
    return (
        <li className="task__item" key={id}>
          <TodoListItem 
            { ...itemProps }
            onDeleted={() => onDeleted(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}
          />
        </li>
    )
  })

  return (
    <ul className="task-wrapper">
      {elements}
    </ul>
    
  )
}

export default TodoList;