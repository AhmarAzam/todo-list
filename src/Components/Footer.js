import React from 'react'

function Footer() {
    let footercontainer={
        position:'relative',
        width:'100%',
        top:'120vh'
    }
    return (
        <footer className="bg-dark text-light" style={footercontainer} >
            <p className='text-center'>Copyright &copy; Todolist.com </p>
        </footer>
    )
}

export default Footer
