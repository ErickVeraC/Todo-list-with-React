import Header from "./components/Header/Header";
import TodoList from "./components/Body/TodoList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 min-h-screen">
        <TodoList />
      </main>

      <Footer />
    </>
  );
}

export default App;
