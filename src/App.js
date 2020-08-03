import React from 'react';

import './App.css';
import { Post } from './Post'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Post />
        <hr />
        <Post />
      </header>
    </div>
  );
}

export default App;
