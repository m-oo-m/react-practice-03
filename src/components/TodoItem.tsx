// TodoItem.tsx
import type { Todo } from '@/types/todo';
type Props = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoItem = (props: Props) => {
  const { todo, toggleTodo, deleteTodo } = props;
  return (
    <li>
      <input checked={todo.completed} onChange={() => toggleTodo(todo.id)} type="checkbox" />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
