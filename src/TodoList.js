import React, { useState } from 'react';

function TodoList(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e){
        setInputValue(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        if (inputValue.trim() === '') return;
        setTodos([...todos, { text: inputValue, completed: false}]);
        setInputValue('');
    }

    function handleDelete(index){
        setTodos(todos.filter((_, i) => i !== index));
    }

    function handleToggleComplete(index){
        setTodos(
            todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed} : todo)
        );
    }

    return(
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Add a new task"
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        </span>
                        <button onClick={() => handleToggleComplete(index)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;