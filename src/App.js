import React from 'react';
import './App.css';

import { createDomain } from 'effector'
import { useStore } from 'effector-react'


const createScope = (domain) => {
  const increment = domain.createEvent('increment');
  const decrement = domain.createEvent('decrement');
  const resetCounter = domain.createEvent('reset counter');

  const store = domain.createStore(0)
    .on(increment, state => state + 1)
    .on(decrement, state => state - 1)
    .reset(resetCounter);

  return {
    store,
    events: { increment, decrement, resetCounter }
  }
}

const counter1 = createDomain('counter 1');
const counter2 = createDomain('counter 2');

const counterStore1 = createScope(counter1);
const counterStore2 = createScope(counter2);

counterStore1.store.watch(console.log)
counterStore2.store.watch(console.log)

const Counter = React.memo(({name, store}) => {
  const value = useStore(store.store);
  console.log('Render', name);
  return (
    <div>
      <div>{value}</div>
      <button onClick={store.events.increment}>+</button>
      <button onClick={store.events.decrement}>-</button>
      <button onClick={store.events.resetCounter}>reset</button>
    </div>
  );
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter name={1} store={counterStore1}/>
       <hr/>
       <Counter name={2} store={counterStore2}/>
      </header>
    </div>
  );
}

export default App;
