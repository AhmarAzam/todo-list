import React from 'react'
import TodoItem from "./TodoItem";

function Todos(props) {
    return (
        <div className='container'>
            <h3 className="my-3 text-center">Todos List</h3>
            {props.todos.length !== 0 ?
                props.todos.map((todo) => {
                    return (
                        <TodoItem list={todo} key={todo.key} onDelete={props.onDelete} />
                    )
                }) : <h1>Your todo list is empty</h1>}

        </div>
    )
}

export default Todos
