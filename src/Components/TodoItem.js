import React from 'react'

function TodoItem({list,onDelete}) {
    return (
        <>
        <div>
            <h2>{list.title}</h2>
            <p>{list.Description}</p> 
            <button className="btn btn-danger" onClick={()=>{onDelete(list)}}>Delete</button>           
        </div>
        <hr />
        </>
    )
}

export default TodoItem
