import React from 'react'
import ItemsList from './ItemsList'

const DemoBoard = ({ items, onRemoveItem }) => (
    <div className='demo-board'>
        <h2>Shopping List</h2>
        <hr />
        { items.length === 0  ? 
        <div className='empty-board'>There are no items in your list.</div> :
        <div className='items'>
            <ItemsList items={items} onRemoveItem={onRemoveItem}/>
        </div> 
        } 
    </div>
)

export default DemoBoard