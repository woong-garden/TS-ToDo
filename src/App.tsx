import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';


function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoList />
    </div>
  );
}



export default App;
