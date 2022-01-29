import React from "react";
import "./sort-items.css";

export default class SortItems extends React.Component {

  buttons = [
    {name: 'all', label:'All'},
    {name: 'active', label:'Active'},
    {name: 'done', label:'Done'}
  ]

  render() {

    const { filter, onFilterChange} = this.props;

    const buttons = this.buttons.map(({label, name}) => {
      const isActive = filter === name;

      const clazz = isActive ? 'btn_active' : 'btn_simple'

      return (
        <button 
          type="button"
          key={name}
          className={`sorting__item ${clazz}`}
          onClick={() => onFilterChange(name)}>
          {label}
        </button>
      )
    })
  
    return (
      <div className="sorting-items-block">
        {buttons}
      </div>
    )
  }
}