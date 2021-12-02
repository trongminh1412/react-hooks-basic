
import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './component/ColorBox';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';
import PostList from './component/PostList';
import Pagination from './component/Pagination';
import queryString from 'query-string';

function App() {
  const [todoList, setTodoList] = useState([
    {id:1, title: "one"},
    {id:2, title: "two"},
    {id:3, title: "three"},
  ]);
 
  const [postList, setPostList] = useState([]);
  const [pagination, setPagiation] = useState({
    _page: 1,
    _limit: 10,
    _totalRows:11,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })
  
  useEffect(() => {
    async function fetchPostList() {
      //có khả năgn xảy ra lỗi, nên để trong try catch
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const respinJSON = await response.json();
        console.log({respinJSON});

        const { data, pagination } = respinJSON;
        setPostList(data);
        setPagiation(pagination);
      } catch(error){
        console.log('falled: ', error.message);
      }
      
    }

    fetchPostList();
  },[filters]);//empty array
  
  //render mỗi lần request
  useEffect(() => {
    console.log('TODO ')
  })

  function handlePageChange( newPage){
    console.log(' page: ', newPage);
    setFilters({
      ...filters,
      _page:newPage,
    })
  }

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
      <Pagination pagination={pagination} onPageChange={handlePageChange}/>
      <PostList posts={postList}/>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>  */}
      {/* <ColorBox/> */}
    </div>
  );
}

export default App;

//npm --save query-string: convert object to string,...