
import { useState } from 'react';
import './App.scss';
import ColorBox from './component/ColorBox';
import TodoList from './component/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    {id:1, title: "one"},
    {id:2, title: "two"},
    {id:3, title: "three"},
  ]);

  function handleTodoClick(todo){
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if( index < 0 ) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    <div className="app">
      <h1>React hooks - Todolist</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/> 
      <ColorBox/>
    </div>
  );
}

export default App;
