import React from 'react';

import './App.css';
import { Post } from './Post';
import { Users } from './Users';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Post/>
        <hr />
        <Users />
      </header>
    </div>
  );
}

export default App;
