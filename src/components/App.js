// App.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, signIn, signOut } from '../actions/action';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(2);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAddAmount = () => {
    dispatch(incrementByAmount(parseInt(amount)));
  };

  const handleSignIn = () => {
    dispatch(signIn());
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div>
      {isLogged ? (
        <div>
          <h1 data-testid='counter'>Counter: {counter}</h1>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleAddAmount}>Add amount</button>
          <button name='Logout' onClick={handleSignOut}>Logout</button>
        </div>
      ) : (
        <div>
          <button name='Login' onClick={handleSignIn}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
