import "./item-add-form.css";
import { Input } from "../sort/sort";
import React from "react";

export default class ItemAddForm extends React.Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    })
  }

  render(){
    return (
      <form className="add-wrapper"
            onSubmit={this.onSubmit}>
        <Input 
          type="text" 
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={this.state.label}
          />
        <button type="submit" className="add-but">Add</button>
      </form>
    )
  }
}