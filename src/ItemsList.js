import React from 'react'

const ItemsList = ({ items, onRemoveItem }) => (
    <div>
        {items.map(item => (
            <div className='item' key={item.id}>
                {Number(item.count)} {item.name}
                <span onClick={() => onRemoveItem(item.id)}><i className="fas fa-trash-alt"></i></span>
                <span><i className="far fa-check-square"></i></span>
            </div>
        ))} 
    </div>
)

export default ItemsList