import React, { useEffect, useState } from 'react';

export default function Functional() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    //~componentDidMount &componentDidUpdate
    document.title = `clicked ${count} time`;
    console.log('useEffect');
  }, [count]);
  //Dependency Array

  // example
  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [action]);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    //~componentDidMount
    document.addEventListener('scroll', handleScroll);

    return () => {
      //~componentWillUnmount
      //clear everything useEffect thực thi
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '500vh' }}>
      <div>Functional</div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>button</button>
      <button onClick={() => setAction('user')}>user</button>
      <button onClick={() => setAction('commit')}>comment</button>
      <p style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
        {scrollPosition}
      </p>
    </div>
  );
}

//call API
//add, delete event listener('click, scroll)
//thao tac vs DOM
//call web api: setTimeout, setInterval
