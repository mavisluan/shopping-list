import React from 'react'
import Item from './Item'

const ItemsList = ({ items, onCheckItem, onRemoveItem, onBackToList }) => (
    <div className='items-list'>
        {items.map(item => (
            <div key={item.id}>
                <Item 
                    item={item}
                    onCheckItem={onCheckItem}
                    onRemoveItem={onRemoveItem}
                    onBackToList={onBackToList}
                />   
            </div>
        ))} 
    </div> 
)

export default ItemsList