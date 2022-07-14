import React, {useEffect, useState} from "react";
import './App.css';
import Form from "../Form/Form"
import '../Form/Form.css';
import TodoList from "../TodoList/TodoList";


function App() {

    return (
        <div className="App">
            <header>
                <h1>Perfect Todo List</h1>
            </header>
            <Form  />
            <TodoList />
        </div>
    )
}


export default App;