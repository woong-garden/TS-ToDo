import React, { useState } from 'react';
import { TodoType } from '../TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';

function Input( {onAdd}:{onAdd: (todo: TodoType) => void}) {
    const [text, setText] = useState('');

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(text.trim().length === 0){
            return;
        }
        onAdd({id: uuidv4(), text, status:'active'})
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='내용을 입력하세요' value={text} onChange={handleChange} />
            <button>추가</button>
        </form>
    );
}

export default Input;