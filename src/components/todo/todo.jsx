import React, { Component } from 'react';
import { connect } from 'react-redux';
import './todo.css';
import { deleteTodoAction } from '../../actions/deleteTodoAction';
import { bindActionCreators } from 'redux';

class Todo extends Component {
    render() {
        return (
            <div className="to-do">
                <span className="to-do-name">{this.props.item.workName}</span>
                <span className="space"></span>
                <button className="to-do-delete" onClick={() => this.props.deleteTodoById(this.props.index)}>Delete</button>
            </div>
        );
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ deleteTodoById: deleteTodoAction }, dispatch);
};

export default connect(null, mapDistachToProps)(Todo);
