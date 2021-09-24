import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newItem: "",
      list: []
    }
  }

  // update function
  updateInput(key, value) {
    // update react state
    this.setState({
      [key]: value
    });
  }

  // add item function
  addItem() {

    // create new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy of current list of items
    const list = [...this.state.list];

    // add new items to the list
    list.push(newItem);

    // update state with new list and reset new item
    this.setState({
      list,
      newItem: ""
    });
  }

  // delete item from the list
  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];

    // filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({
      list: updatedList
    });
  }


  render() {
    return (
      
      <div className="App">
        
        <div className="container">
        <h1>Make your to-do list</h1>
          <h2>Add an item....</h2>
          <br />
          <input id="input" type="text" placeholder="Enter an item to the list" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)} />

          <br /><br />

          <button
            onClick={() => this.addItem()}
            id="btn"
          >Add item</button>

          <br /><br />

          <div className="todo-area">
            <ul className="todo-list">
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button
                      onClick={() => this.deleteItem(item.id)}
                      className="delete-btn"
                    >x</button>
                  </li>
                )
              })}
            </ul>
          </div>


        </div>
      </div>
    )
  }
}
