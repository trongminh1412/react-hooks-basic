
import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './component/ColorBox';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';
import PostList from './component/PostList';

function App() {
  const [todoList, setTodoList] = useState([
    {id:1, title: "one"},
    {id:2, title: "two"},
    {id:3, title: "three"},
  ]);
 
  const [postList, setPostList] = useState([]);
  
  useEffect(() => {
    async function fetchPostList() {
      //có khả năgn xảy ra lỗi, nên để trong try catch
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const respinJSON = await response.json();
        console.log({respinJSON});

        const { data } = respinJSON;
        setPostList(data);
      } catch(error){
        console.log('falled: ', error.message);
      }
      
    }

    fetchPostList();
  },[]);//empty array
  
  useEffect(() => {
    console.log('TODO ')
  })

  function handleTodoClick(todo){
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if( index < 0 ) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);
    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React hooks - PostLis</h1>

      <PostList posts={postList}/>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>  */}
      <ColorBox/>
    </div>
  );
}

export default App;
