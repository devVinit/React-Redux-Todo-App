import React, { Component } from 'react';
import Header from './components/header/header';
import './App.css';
import TodoList from './components/todoList/todoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toddoArray: [{
        workName: 'work1',
      }, {
        workName: 'work2',
      }, {
        workName: 'work3',
      }, {
        workName: 'work 4',
      }]
    };

    this.deleteTodoById = this.deleteTodoById.bind(this);
  }

  deleteTodoById(index) {
    const currentTodoArray = this.state.toddoArray;
    currentTodoArray.splice(index, 1);
    this.setState({ toddoArray: currentTodoArray });
  }

  addTodo(event) {
    if (event.key === 'Enter') {
      const currentTodoArray = this.state.toddoArray;
      currentTodoArray.push({ workName: event.target.value });
      this.setState({ toddoArray: currentTodoArray });
    }
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="to-do-container">
            <input type="text" className="search" placeholder="Enter Your Work Here" onKeyDown={event => this.addTodo(event)} />
            <div className="space-between"></div>
            <TodoList items={this.state.toddoArray} deleteTodoById={this.deleteTodoById} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
