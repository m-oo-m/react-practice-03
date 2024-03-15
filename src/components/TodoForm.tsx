import type { FormEvent } from 'react';
import { useState } from 'react';

type Props = {
  addTodo: (text: string) => void;
};

const TodoForm = (props: Props) => {
  const { addTodo } = props;
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setText(e.target.value)} type="text" value={text} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
