import type { Todo } from '@/types/todo';

type Props = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setUncomplitedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  inputValue: string;
  getKey: () => string;
};

function TodoForm(props: Props) {
  const { inputValue, setTodos, setInputValue, getKey, setUncomplitedTodos } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue == '') return;
    const nowData = new Date();
    nowData.setHours(nowData.getHours() + 9);
    const formattedTime = `${nowData.getFullYear()}年${nowData.getMonth() + 1}月${nowData.getDate()}日`;
    const key = getKey();

    setTodos((prevTodos) => [...prevTodos, { key: key, data: formattedTime, text: inputValue, done: false }]); //非同期処理のため、todosの値が更新される前にconsole.logが実行される
    setUncomplitedTodos((prevTodos) => [
      ...prevTodos,
      { key: key, data: formattedTime, text: inputValue, done: false },
    ]);
    setInputValue('');
  };

  return (
    <div>
      <div className="flex">
        <input
          className="flex-1 rounded-l bg-blue-50 px-2 py-1 outline-none"
          onChange={handleInputChange}
          type="text"
          value={inputValue}
        />
        <button
          className="flex w-20 items-center justify-center rounded-r bg-blue-500 py-1 text-white duration-150 hover:bg-blue-600"
          onClick={addTodo}
        >
          追加
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
