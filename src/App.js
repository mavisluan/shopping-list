import React, { Component } from 'react';
import DemoBoard from './DemoBoard'
import serializeForm from 'form-serialize'
import './App.css';

class App extends Component {
  state = {
    items: [],
    name: '',
    count: 0,
  }

  componentDidMount() {
    const localItems = JSON.parse(localStorage.getItem('localItems'))
    const items = localItems ? localItems : []
    this.setState({ items })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const value = serializeForm(e.target, { hash: true} )
    const { items } = this.state
    const item = this.createItem(value, items)
    localStorage.setItem('localItems', JSON.stringify([...items, item]))
    this.setState({ 
      items: JSON.parse(localStorage.getItem('localItems')),
      name: '', 
      count: 1
    }) 
  }
 
  removeItem = (id) => {
    const items = this.state.items.filter(item => (item.id !== id))
    localStorage.setItem('localItems', JSON.stringify(items)) 
    this.setState({ items })
  }

  createItem = (value, items) => {
    const id = items.length === 0 ? 0 : items.length + 1
    return { ...value, id}
  }

  handleName = (e) => (
    this.setState({ name: e.target.value })
  )

  handleCount = (e) => (
    this.setState({ count: e.target.value })
  )

  render() {
    const { name, count, items } = this.state

    return (
      <div className="app">
        <DemoBoard items={items} onRemoveItem={this.removeItem}/>
        <div className='add-board'>
          <h2>Add New Item</h2>
          <hr />
          <form className='create-item-form' onSubmit={this.handleSubmit}>
            <h3>Name</h3>
            <input 
              type='text' 
              placeholder='Enter name' 
              name='name'
              value={name}
              required 
              minLength='1'
              onChange={this.handleName}
              autoComplete="off"
            />
            <h3>Quantify</h3>
            <input
              type='number' 
              placeholder='0' 
              name='count' 
              value={count}
              min='1'
              onChange={this.handleCount}
              autoComplete="off"
            />
            <hr />
            <div className='buttons'>
              <input type='submit' value='Add to list'/>
              <span>Cancel</span>
            </div>  
          </form>
        </div>
      </div>
    );
  }
}

export default App;
