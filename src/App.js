import React from 'react';
import TaskList from './components/TaskList';
// import ProgressBar from './components/ProgressBar';

const App = () => {
  return (
    <div className="App">
      <header className="bg-blue-700 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Todo List</h1>
      </header>
      <main className="p-4">
        <TaskList />
      </main>
    </div>
  );
};

export default App;
