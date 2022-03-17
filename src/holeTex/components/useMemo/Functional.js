import React, { useMemo, useState } from 'react';

function expensive(number) {
  console.log('Start');
  const start = new Date();

  //doi 3s
  while (new Date() - start < 3000);
  console.log('Finish', new Date() - start, 'ms');

  return number * number;
}

export default function App() {
  const [count, setCount] = useState(0);

  const number = useMemo(() => {
    return expensive(10);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>button</button>

      <p>{number}</p>
    </div>
  );
}
//luu kết quả của một hàm, function, một phép tính
//tránh bị tính lại gây vẫn đề về performance
