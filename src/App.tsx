import { useState } from 'react';

function App() {
  const [showHello, setShowHello] = useState(false);
  const toggleHello = () => {
    setShowHello((prev) => !prev);
  };
  return (
    <>
      <div className=" flex h-screen items-center justify-center bg-gray-200">
        <div className="py-5 text-center">
          {showHello && <p>Hello, React!</p>}
          <button
            className="rounded bg-blue-500 px-4 py-2  font-bold text-white hover:bg-blue-700"
            onClick={toggleHello}
          >
            こんにちはボタン
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
