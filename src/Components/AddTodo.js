import React, { useState } from 'react'

function AddTodo({ addTodo }) {
    const [title, settitle] = useState('')
    const [desc, setDescription] = useState('')

    function Submit(e) {
        e.preventDefault();
        if (title === '' || desc === '') {
            alert('Title or description does not empty !')
        } else {
            addTodo(title, desc)
            setDescription('')
            settitle('')
        }
    }

    return (
        <div className='container'>
            <h3>Add Todo</h3>
            <form onSubmit={Submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" value={title} id="title" aria-describedby="emailHelp" onChange={(e) => { settitle(e.target.value) }} />
                    {/* <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Discription</label>
                    <input type="text" className="form-control" value={desc} id="desc" onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className ="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}

export default AddTodo
