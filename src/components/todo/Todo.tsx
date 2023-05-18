import React from 'react';
import { TodoType } from '../TodoList/TodoList';
import {FaTrashAlt} from 'react-icons/fa'

interface TodoProps {
    onUpdate: (updated:TodoType) => void
    onDelete: (updated:TodoType) => void
    todo: TodoType;
}

function Todo( {onUpdate, onDelete, todo}:TodoProps ) {

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const status = event.target.checked ? 'completed' : 'active';
        onUpdate({ ...todo, status })
    }

    const handleDelete = () => onDelete(todo)


    return (
        <div>
            <li key={todo.id}>
                <input type='checkbox' id='checkbox' checked={todo.status === 'completed'} onChange={handleChange} />
                <label htmlFor='checkbox'>{todo.text}</label>
                <button onClick={handleDelete}><FaTrashAlt/></button>
            </li>
        </div>
    );
}

export default Todo;