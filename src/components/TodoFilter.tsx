// TodoFilter.tsx

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const TodoFilter = (props: Props) => {
  const { setFilter } = props;
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
};

export default TodoFilter;
