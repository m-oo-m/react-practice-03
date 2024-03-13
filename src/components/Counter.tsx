import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  const reset = () => setCount(0);
  return (
    <div>
      <input className="p-1 text-right focus:outline-none" readOnly type="text" value={count} />
      <div className="mt-2 flex gap-2">
        <button className="flex-1 bg-blue-300 text-center text-base" onClick={increment}>
          ＋
        </button>
        <button className="flex-1 bg-red-300 text-center text-base" onClick={decrement}>
          −
        </button>
      </div>
      <button className="mt-1 block w-full bg-gray-300 text-center" onClick={reset}>
        RESET
      </button>
    </div>
  );
}

export default Counter;
