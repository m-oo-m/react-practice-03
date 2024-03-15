import { useState } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import type { Todo } from '@/types/todo';

import TodoFilter from '@/components/TodoFilter';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('all');

  const getKey = () => Math.random().toString(32).substring(2); // 0〜1未満の乱数字を取得して、数字を32進法に文字列に変換。前から３番目から文字を抽出

  const addTodo = (text: string) => {
    setTodos([...todos, { id: getKey(), text, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filterTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = filterTodos();

  return (
    <>
      <div className="flex h-screen justify-center bg-gray-100">
        <div className="w-[600px] bg-white p-4">
          <TodoForm addTodo={addTodo} />
          <TodoFilter setFilter={setFilter} />
          <TodoList deleteTodo={deleteTodo} todos={filteredTodos} toggleTodo={toggleTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
