import React from "react";
import SortItems from "../sort-items";
import "./sort.css";


export const Input = ({ placeholder = 'search', onChange, value }) => {
  return <input 
          placeholder={placeholder} 
          className="search-panel" 
          onChange={onChange}
          value={value}
          />
}

export default class Sort extends React.Component {

  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  }

  render(){
    const { filter, onFilterChange } = this.props;

    return (
      <div className="sorting-block">
        <Input onChange={this.onSearchChange}/>
        <SortItems 
          filter={filter}
          onFilterChange={onFilterChange}
        />
      </div>
      
    )
  }
}