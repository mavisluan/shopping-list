import React, { Component } from 'react';
import ItemsList from './ItemsList'
import NewItemForm from './NewItemForm'
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
 
  cancelSubmit = () => this.setState({ name: '', count: 0 })

  removeItem = (id) => {
    const items = this.state.items.filter(item => item.id !== id)
    localStorage.setItem('localItems', JSON.stringify(items)) 
    this.setState({ items })
  }

  checkItem = (id) => {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.checked = true
      }
      return item
    })
    localStorage.setItem('localItems', JSON.stringify(items)) 
    this.setState({ items })
  }

  backToList = (id) => {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.checked = false
      }
      return item
    })
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
    const itemsOnList = items.filter(item => item.checked === false)
    const itemsChecked = items.filter(item => item.checked === true)

    return (
      <div className="app">
          <div className='demo-board'>
            <div className='header'>
              <h2>Shopping List</h2><hr />
            </div>
            <div className='list-items'>
              <ItemsList 
                items={itemsOnList}
                onCheckItem={this.checkItem} 
                onRemoveItem={this.removeItem}/>
            </div>
            {itemsChecked.length !== 0 &&
              <div className='checked-items'>
                <div>Checked Items</div>
                <ItemsList 
                  items={itemsChecked}
                  onBackToList={this.backToList}
                  onRemoveItem={this.removeItem}/>
              </div>
            }  
          </div>
        <div>
        <div className='add-board'>
          <div className='header'>
            <h2>Add New Item</h2><hr />
          </div>
          <NewItemForm 
            name={name} 
            count={count} 
            onNameChange={this.handleName}
            onCountChange={this.handleCount}
            onSubmit={this.handleSubmit}
            onCancelSubmit={this.cancelSubmit}
          />
        </div> 
      </div>
    </div>
    )
  }
}

export default App;
