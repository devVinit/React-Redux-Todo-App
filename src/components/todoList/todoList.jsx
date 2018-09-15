import React, { Component } from 'react';
import Todo from '../todo/todo';

class TodoList extends Component {
    constructor(props) {
        super(props);

        // this binding is necessary for doing things with upcoming props  
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(index) {
        this.props.deleteTodoById(index);
    }

    render() {
        return (
            <div className="to-do-list">
                <span>
                    {
                        this.props.items.map((element, index) => {
                            return <Todo item={element} key={index} index={index} deleteTodo={this.deleteTodo} />;
                        })
                    }
                </span>
            </div>
        );
    }
}

export default TodoList;
