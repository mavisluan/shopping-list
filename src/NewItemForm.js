import React from 'react'

const NewItemForm = ({ name, count, onNameChange, onCountChange, onSubmit, onCancelSubmit }) => (       
    <form className='create-item-form' onSubmit={onSubmit}>
        <h3>Name</h3>
        <input 
            type='text' 
            placeholder='Enter name' 
            name='name'
            value={name}
            required 
            minLength='1'
            onChange={onNameChange}
            autoComplete="off"/>
        <h3>Quantify</h3>
        <input
            type='number' 
            placeholder='0' 
            name='count' 
            value={count}
            min='1'
            onChange={onCountChange}
            autoComplete="off"/>
            <hr />
        <div className='buttons'>
            <input type='submit' value='Add to list'/>
            <span onClick={onCancelSubmit}>Cancel</span>
        </div>  
    </form>
)

export default NewItemForm