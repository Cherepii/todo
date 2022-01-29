import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {

  render() {
    const { label,
            onDeleted, 
            onToggleImportant, 
            onToggleDone,
            done, isImportant } = this.props;

    let classNames = 'task__text';
    if(done) {
      classNames += ' done';
    }

    if (isImportant) {
      classNames += ' isImportant'
    }

    return (
      <>
        <span className={classNames}>
          <span
            className="task__text__label"
            onClick={ onToggleDone }>
            {label}
          </span>
        </span>
        <div className="icons-block">
        <span className="icon red-icon" onClick={onDeleted}>
          <svg>
            <use xlinkHref="sprite.svg#rabbish-box"></use>
          </svg>
        </span>
        <span className="icon green-icon" onClick={ onToggleImportant }>
        <svg>
            <use xlinkHref="sprite.svg#importance"></use>
          </svg>
        </span>
      </div>
    </>
    )
    }
  }