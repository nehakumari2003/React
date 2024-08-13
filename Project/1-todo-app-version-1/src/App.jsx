import Appname from "./components/Appname";
import AddTodo from "./components/addTodo";
import TodoItem1 from "./components/todoIteam1";
import TodoItem2 from "./components/todoitems2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Appname />
      <AddTodo></AddTodo>
      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
      
    </center>
  );
}

export default App;
