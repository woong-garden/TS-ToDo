import React, { useState } from 'react';
import Input from '../input/Input';
import Todo from '../todo/Todo';

export interface TodoType {
    id: string,
    text: string,
    status: string
}
function TodoList() {
    const [todos, setTodos] = useState([
        {id: '123', text: '장보기', status: 'active'},
        {id: '124', text: '공부', status: 'active'},
    ]);


    const handleAdd = (todo:TodoType) => {
        setTodos([...todos, todo])
    }

    const handleUpdate = (updated:TodoType) => 
        setTodos(todos.map(t => t.id === updated.id ? updated:t))
    

    const handleDelete = (deleted:TodoType) => 
        setTodos(todos.filter(t => t.id !== deleted.id))
        
    

    return (
        <section>
            <ul>
                {
                    todos.map(item => <Todo key={item.id} onUpdate={handleUpdate} onDelete={handleDelete} todo={item}/>)
                }
            </ul>
            <Input onAdd={handleAdd}/>
        </section>
    );
}

export default TodoList;