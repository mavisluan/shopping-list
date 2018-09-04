import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    items: []
  }

  render() {
    return (
      <div className="app">
        <div className='board'>
          <h2>Shopping List</h2>
          <hr />
          <div className='items'>
            There are no items in your list.
          </div>  
        </div>
        <div className='new-item'>
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
