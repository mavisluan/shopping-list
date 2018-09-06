import React from 'react'

const Item= ({ item, onRemoveItem, onCheckItem, onBackToList }) => {
    const controlButton = item.checked 
    ? <span onClick={() => onBackToList(item.id)}><i className="fas fa-plus"></i></span> 
    : <span onClick={() => onCheckItem(item.id)}><i className="far fa-check-square"></i></span>

    return (
        <div className='item'>
            <div className='item-name' style={{textDecoration: item.checked && 'line-through'}}>
                {Number(item.count)} {item.name}
            </div>
            <div className='item-control'>
                <span onClick={() => onRemoveItem(item.id)}><i className="fas fa-trash-alt"></i></span>
                {controlButton}
            </div>    
        </div>
    )
}  

export default Item