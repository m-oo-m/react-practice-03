import type { Todo } from '@/types/todo';

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setComplitedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setUncomplitedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  complitedTodos: Todo[];
  uncomplitedTodos: Todo[];
  filter: string;
};

function TodoItem(props: Props) {
  const { todos, setTodos, setComplitedTodos, setUncomplitedTodos, filter, complitedTodos, uncomplitedTodos } = props;
  const filterItems = (): Todo[] => {
    if (filter === '完了') {
      return complitedTodos;
    } else if (filter === '未完了') {
      return uncomplitedTodos;
    } else {
      return todos;
    }
  };

  const doneTodo = (key: string) => {
    todos.map((todo) => {
      if (todo.key === key) {
        todo.done = true;
        setComplitedTodos((prevTodos) => [...prevTodos, todo]);
      } else {
        setUncomplitedTodos((prevTodos) => [...prevTodos, todo]);
      }
    });
    //setTodos(newTodos);
  };

  return (
    <ul className="py-8">
      {filterItems().map((todo) => (
        <li className="flex items-center [&:not(:first-child)]:mt-2" key={todo.key}>
          <span className="text-sm">{todo.data}</span>
          <span className="grow pl-1">{todo.text}</span>
          {!todo.done && (
            <button
              className="ml-1 flex  w-16 items-center justify-center rounded bg-green-500 py-1 text-sm text-white duration-150 hover:bg-green-600"
              onClick={() => {
                doneTodo(todo.key);
              }}
            >
              完了
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoItem;
