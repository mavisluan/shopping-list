import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    items: [{id: 0, name: 'eggs', count: '2'}]
  }

  render() {
    const { items } = this.state
    
    return (
      <div className="app">
        <div className='display-board'>
          <h2>Shopping List</h2>
          <hr />
          { items.length === 0  ? 
            <div>There are no items in your list.</div> :
            <div className='items'>
              {items.map(item => (
                <div className='item' key={item.id}>
                    {item.count} {item.name}
                    <span><i class="fas fa-trash-alt"></i></span>
                    <span><i class="far fa-check-square"></i></span>
                </div>
              ))} 
            </div> 
          } 
        </div>
        <div className='add-board'>
          <h2>Add New Item</h2>
          <hr />
          <form>
            <h3>Name</h3>
            <input type='text' placeholder='Enter name' />
            <h3>Quantify</h3>
            <input type='number' placeholder='0' />
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
