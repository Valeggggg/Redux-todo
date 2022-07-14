import React from "react";
import TodoItem from "../TodoItem/TodoItem";


const TodoList = () => {
    return (
        <div className="todo-container">
            <ul>
                   <TodoItem />
            </ul>
        </div>
    )
}

export default TodoList;