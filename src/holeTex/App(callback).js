import { useCallback, useState } from 'react';
import Functional from './components/useCallback/Functional';

function App() {
  const [users, setUsers] = useState('');

  //getdata return một promise
  //note useCallback : getdata nhận là tham chiếu ( tham chiếu và tham trị)
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const handleClick = () => {
    getData('users')
      .then((res) => res.json()) //return json
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };
  return (
    <>
      <p>Data</p>
      <button onClick={handleClick}>Get users data</button>
      <p>{JSON.stringify(users)}</p>
      <Functional getData={getData} />
    </>
  );
}

export default App;

//tranh function ở component con thực thi lại khi nhận 1 fuction
// từ component cha
//chiếm một vùng bộ nhớ
