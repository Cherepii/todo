import React from 'react';
import AppHeader from '../app-header';
import Sort from '../sort';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './App.css';


export default class App extends React.Component {

  maxId = 100;

  state = {
    taskData: [
      this.createTodoItem('Drink Coffe'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Make Awesome App'),
    ],
    term: '',
    filter: 'all'
  };

  onSearchChange = (term) => {
    this.setState({ term });
  }

  onFilterChange = (filter) => {
    this.setState({filter});
  }

  createTodoItem (label) {
    return {
      label,
      isImportant: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({taskData}) => {
      const idx = taskData.findIndex((el) => el.id === id);

      const before = taskData.slice(0, idx);
      const after = taskData.slice(idx + 1)
      const newArray = [ ...before, ...after]

      return {
        taskData: newArray
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({taskData}) => {
      const newArr = [
        ...taskData,
        newItem
      ]

      return {
        taskData: newArr
      }
    })
  }

  toggleProperty = (arr, id, propName ) => {
    const idx = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName]};

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ]
  }

  onToggleImportant = (id) => {
    this.setState(({taskData}) => {
      return {
        taskData: this.toggleProperty(taskData, id, 'isImportant')
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(({taskData}) => {
      return {
        taskData: this.toggleProperty(taskData, id, 'done')
      }
    })
  }

  search = (items, term) => {
    if(items.length === 0){
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) >-1;
    })
  }

  filter = (items, filter) => {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done': 
        return items.filter((item) => item.done);
      default: 
        return items;
    }
  }

  render() {

    const { taskData, term, filter } = this.state;
    const visibleItem = this.filter(this.search(taskData, term), filter);

    const doneCount = taskData.filter((el) => el.done).length;
    const toDoCount = taskData.length - doneCount;

    return (
      <div className="wrapper">
        <AppHeader toDo={toDoCount} done={doneCount}/>
        <Sort 
          onSearchChange={this.onSearchChange} 
          filter={filter}
          onFilterChange={this.onFilterChange}  
        />
        <TodoList 
          tasks={visibleItem} 
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}