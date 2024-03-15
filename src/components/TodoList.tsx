// TodoList.tsx
import TodoItem from './TodoItem';

import type { Todo } from '@/types/todo';

type Props = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoList = (props: Props) => {
  const { todos, toggleTodo, deleteTodo } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem deleteTodo={deleteTodo} key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
