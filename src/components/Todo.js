import React, { useState } from 'react'
import './Todo.css'
import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { IoMdDoneAll } from 'react-icons/io'


function Todo() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [editId, setEditId] = useState(0)
    const addTodo = () => {
        if (todo !== '') {
            setTodos([...todos, { list: todo, id: Date.now(), status: false }])
            setTodo('')
        } 
        if(editId){
            const editTodo = todos.find((value)=> value.id === editId)
            const updateTodo = todos.map((value)=> value.id === editTodo.id 
            ? (value = {list : todo,id : value.id})
            : (value = {list : value.list,id : value.id}))
            setTodos(updateTodo)
            setEditId(0)
            setTodo('')
        }
    }
    const onDelete = (id) => {
        setTodos(todos.filter((value) => value.id !== id))
    }
    const onComplete = (id) => {
        let complete = todos.map((value) => {
            if (value.id === id) {
                return ({ ...value, status: !value.status })
            }
            return value
        })
        setTodos(complete)

    }
    const onEdit = (id) => {
        let editTodo = todos.find((value) => value.id === id)
        setTodo(editTodo.list)
        setEditId(editTodo.id)
    }
    return (
        <div className='container'>
            <h2>TODO APP</h2>
            <form className='formGroup' onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={todo} placeholder='Enter your Todo' className='form-control' onChange={(event) => setTodo(event.target.value)} />
                <button onClick={addTodo}>{editId ? 'EDIT' : 'ADD'}</button>

            </form>
            <div className='list'>
                <ul>
                    {
                        todos.map((value) => {
                            return (
                                <li className='form-control list-items' >
                                    <div className='list-item-lists mypost' id={value.status ? 'list-item' : ''}> {value.list}</div>
                                    <span>
                                        <IoMdDoneAll className='list-item-icons' id='complete' title='Complete' onClick={() => onComplete(value.id)} />
                                        <FiEdit className='list-item-icons' id='edit' title='Edit' onClick={() => onEdit(value.id)} />
                                        <MdDelete className='list-item-icons' id='delete' title='Delete' onClick={() => onDelete(value.id)} />
                                    </span>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}
export default Todo