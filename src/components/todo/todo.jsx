import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="to-do">
                <span className="to-do-name">{this.props.item.workName}</span>
                <span className="space"></span>
                <button className="to-do-delete" onClick={() => this.props.deleteTodo(this.props.index)}>Delete</button>
            </div>
        );
    }
}

export default Todo;
