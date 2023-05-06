import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

// I am aware that I don't need to create/import two jsx files. This is just an experiment and it works
function App() {
  return (
    <div className="App">
      <TodoHeader />
      <TodoList />
    </div>
  );
}

export default App;
