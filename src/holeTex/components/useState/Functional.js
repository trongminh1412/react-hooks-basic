import React, { useState } from 'react';

export default function Functional() {
  //   const value = () => {
  //     let total = 0;
  //     for (let i = 0; i < 100; i++) {
  //       total += 1;
  //     }
  //     console.log('haha');
  //     return total;
  //   };
  // Th sử giá trị mặc định bằng 0,
  // Th sử dụng một function cho useState
  //   const [count, setCount] = useState(() => {
  //     return value();
  //   });
  // TH1: muốn tăng count lên >1
  // nhưng count hiện tại chưa được cập nhật lại nên
  // count không thay đổi

  // Fix
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  return (
    <>
      <div>Functional</div>
      <p>{count}</p>
      <button onClick={handleClick}>button</button>
    </>
  );
}

// ex:  set lại state trong functon: state mới thay thế state cũ
//      set lại state trong class: merge hai state lại với nhau
