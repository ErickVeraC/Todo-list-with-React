import Header from "./components/Header/Header";
import TodoList from "./components/Body/TodoList";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <TodoList />
      </div>
    </>
  );
}

export default App;
