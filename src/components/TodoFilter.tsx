import { useState } from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

import type { Todo } from '@/types/todo';

function TodoFilter() {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [complitedTodos, setComplitedTodos] = useState<Todo[]>([]);
  const [uncomplitedTodos, setUncomplitedTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>('すべて');

  const getKey = () => Math.random().toString(32).substring(2); // 0〜1未満の乱数字を取得して、数字を32進法に文字列に変換。前から３番目から文字を抽出
  const filterSet = (filterState: string) => {
    if (filterState === '未完了') {
      setFilter('未完了');
    } else if (filterState === '完了') {
      setFilter('完了');
    } else {
      setFilter('すべて');
    }
  };

  return (
    <div>
      <TodoForm
        getKey={getKey}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setTodos={setTodos}
        setUncomplitedTodos={setUncomplitedTodos}
      />
      <div>
        <div>
          <button
            onClick={() => {
              filterSet('すべて');
            }}
          >
            すべて
          </button>
          <button
            onClick={() => {
              filterSet('未完了');
            }}
          >
            未完了
          </button>
          <button
            onClick={() => {
              filterSet('完了');
            }}
          >
            完了
          </button>
        </div>

        {/* <TodoList complitedTodos={complitedTodos} todos={todos} uncomplitedTodos={uncomplitedTodos} /> */}
        <TodoItem
          complitedTodos={complitedTodos}
          filter={filter}
          setComplitedTodos={setComplitedTodos}
          setTodos={setTodos}
          setUncomplitedTodos={setUncomplitedTodos}
          todos={todos}
          uncomplitedTodos={uncomplitedTodos}
        />
      </div>
    </div>
  );
}
export default TodoFilter;
