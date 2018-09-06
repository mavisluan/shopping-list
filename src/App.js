import React, { Component } from 'react';
import DemoBoard from './DemoBoard'
import AddBoard from './AddBoard'
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
      count: 0
    }) 
  }
 
  removeItem = (id) => {
    const items = this.state.items.filter(item => (item.id !== id))
    localStorage.setItem('localItems', JSON.stringify(items)) 
    this.setState({ items })
  }

  createItem = (value, items) => {
    const id = items.length === 0 ? 0 : items.length + 1
    return { ...value, id, checked: false}
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
        <DemoBoard 
          items={items} 
          onRemoveItem={this.removeItem}>
        </DemoBoard>
        <AddBoard 
          name={name} 
          count={count} 
          onNameChange={this.handleName}
          onCountChange={this.handleCount}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
