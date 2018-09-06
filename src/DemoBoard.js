import React from 'react'
import ItemsList from './ItemsList'
import PropTypes from 'prop-types'

const DemoBoard = ({ items, onRemoveItem }) => (
    <div className='demo-board'>
        <h2>Shopping List</h2>
        <hr />
        {items.length === 0  ? 
        <div className='empty-board'>There are no items in your list.</div> :
        <div>
            <div className='items'>
                <ItemsList 
                    items={items} 
                    onRemoveItem={onRemoveItem}/>
            </div> 
            <div>
                checked Items
            </div>
        </div>
        
        } 
    </div>
)


DemoBoard.propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveItem: PropTypes.func.isRequired
}

export default DemoBoard