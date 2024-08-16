import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "15/08/2028",
    },
    {
      name: "Go to college",
      dueDate: "15/08/2028",
    },
    {
      name: "Complete DSA",
      dueDate: "15/08/2028",
    },
  ];

  return (
    <center className="todo-container">
      <Appname />
      <AddTodo />
      {/* Pass the todoItems array to the TodoItems component */}
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
