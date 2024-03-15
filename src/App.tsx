import TodoFilter from '@/components/TodoFilter';

function App() {
  return (
    <>
      <div className="flex h-screen justify-center bg-gray-100">
        <div className="w-[600px] bg-white p-4">
          <TodoFilter />
        </div>
      </div>
    </>
  );
}

export default App;
