import Header from "./components/Header/Header";
import TodoList from "./components/Body/TodoList";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <TodoList />
      </main>
    </>
  );
}

export default App;
