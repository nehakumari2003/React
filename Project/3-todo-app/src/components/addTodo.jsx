import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
    const todoNameElement = useRef();
    const dueDateElement = useRef();

    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        if (todoName && dueDate) {
            onNewItem(todoName, dueDate);
            todoNameElement.current.value = ""; // Clear the input after submission
            dueDateElement.current.value = "";  // Clear the input after submission
        }
    };

    return (
        <div className="container text-center">
            <form className="row kg-row" onSubmit={handleAddButtonClicked}>
                <div className="col-6">
                    <input 
                        type="text" 
                        ref={todoNameElement}
                        placeholder="Enter Todo Here" 
                    />
                </div>
                <div className="col-4">
                    <input 
                        type="date" 
                        ref={dueDateElement}
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-success kg-button">
                        <BiMessageAdd/>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;
