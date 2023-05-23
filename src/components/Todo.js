import React, { useState } from 'react'
import './Todo.css'


function Todo() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const addTodo = () => {
        setTodos([...todos, todo])
        setTodo('')
    }
    return (
        <div className='container'>
            <h2>TODO APP</h2>
            <form className='formGroup' onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={todo} placeholder='Enter your Todo' className='form-control' onChange={(event) => setTodo(event.target.value)} />
                <button onClick={addTodo}>ADD</button>

            </form>
            <div className='list'>
                <ul>
                    {
                        todos.map((value) => {
                            return (
                                <li className='form-control'>{value}</li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}
export default Todo