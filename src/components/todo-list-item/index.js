import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItemFunc extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
    } = this.props;

    let ClassNames = 'todo-list-item ';
    if (done) {
      ClassNames += ' done';
    }
    if (important) {
      ClassNames += ' important';
    }

    return (
      <span className={ClassNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          onClick={onToggleImportant}
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
