import React, { Component } from 'react';
import Header from './components/header/header';
import TodoList from './components/todoList/todoList';
import AddTodo from './components/addTodo/addTodo';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="to-do-container">
            <AddTodo className="search" />
            <div className="space-between"></div>
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
