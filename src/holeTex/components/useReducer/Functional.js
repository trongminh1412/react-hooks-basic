import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'TANG':
      return state + 1;
    case 'GIAM':
      return state - 1;
    case 'XOA':
      return 0;
    default:
      return state;
  }
};

const initState = {
  loading: false,
  data: [],
  error: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case 'GET_USER_ERROR':
      return {
        ...state,
        data: [],
        error: action.data,
      };
    default:
      return state;
  }
};

function Functional() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [user, userDispatch] = useReducer(userReducer, initState);

  const getUser = () => {
    userDispatch({
      type: 'GET_USER_REQUEST',
    });

    setTimeout(() => {
      fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((res) => {
          userDispatch({
            type: 'GET_USER_SUCCESS',
            data: res,
          });
        })
        .catch((err) => {
          userDispatch({
            type: 'GET_USER_ERROR',
            data: err,
          });
        });
    }, 2000);
  };

  return (
    <>
      <button onClick={getUser}>Get User</button>
      {user.loading ? <p>loading...</p> : <p>{JSON.stringify(user)}</p>}

      <p> Count: {count}</p>
      <button onClick={() => dispatch('TANG')}>TANG</button>
      <button onClick={() => dispatch('GIAM')}>GIAM</button>
      <button onClick={() => dispatch('XOA')}>XOA</button>
    </>
  );
}
export default Functional;
