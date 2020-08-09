import React from 'react';

import s from './App.module.scss';

import TodoApp from 'components/TodoApp'

function App() {
  return (
    <div className={s.App}>
      <TodoApp />
    </div>
  );
}

export default App;
