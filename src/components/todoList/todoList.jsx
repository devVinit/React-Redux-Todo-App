import React, { Component } from 'react';
import Todo from '../todo/todo';
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return (
            <div className="to-do-list">
                <span>
                    {
                        this.props.items.map((element, index) => {
                            return <Todo item={element} key={index} index={index} />;
                        })
                    }
                </span>
            </div>
        );
    }
}

const mapStateToProps = () => state => {
    return {
        items: state.todoList
    };
};

export default connect(mapStateToProps)(TodoList);
