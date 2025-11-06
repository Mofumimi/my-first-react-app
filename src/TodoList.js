import React, { useState } from 'react';
import checkImg from './images/check.png';
import xImg from './images/x.png';

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
        <div className='main-box'>
            <h1>Todo List</h1>
            <span className='header'>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Add a new task"
                    />
                    <button type="submit">Add Todo</button>
                </form>
            </span>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className='todoItem'>
                        <span className='checkMarks'>
                            <img src={todo.completed ? checkImg : xImg} className='checkMarks img' alt="Status" />
                            {todo.text}
                        </span>
                        <div className='buttonGroup'>
                            <button onClick={() => handleToggleComplete(index)}>
                                {todo.completed ? 'Undo' : 'Complete'}
                            </button>
                        
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;