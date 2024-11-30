import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from "../features/todo/todoSlice";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);
    const [input, setInput] = useState('');
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editText, setEditText] = useState('');

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        } else {
            alert('Todo cannot be empty!');
        }
    };

    const startEditing = (id, text) => {
        setEditingTodoId(id);
        setEditText(text);
    };

    const saveEdit = (id) => {
        if (editText.trim()) {
            dispatch(editTodo({ id, text: editText }));
            setEditingTodoId(null);
            setEditText('');
        } else {
            alert('Todo text cannot be empty!');
        }
    };

    const cancelEdit = () => {
        setEditingTodoId(null);
        setEditText('');
    };

    return (
        <>
            <div className='border p-5 bg-gray-200'>
                <h1 className='font-extrabold text-center text-xl'>Todo App Using Redux-Toolkit</h1>
            </div>
            <form onSubmit={addTodoHandler}>
                <div className='gap-5 flex justify-center mb-6 mt-6'>
                    <input
                        className='px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                        type="text"
                        placeholder='Enter your todo here...'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        type='submit'
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Add Todo
                    </button>
                </div>
            </form>
            <ul className="list-none">
                {todos.map((todo) => (
                    <div className='flex justify-center'>
                    <li
                        key={todo.id}
                        className="mt-4 flex items-center justify-between w-1/3 bg-zinc-800 px-4 py-2 rounded"
                    >
                        {editingTodoId === todo.id ? (
                            <input
                                type="text"
                                className="flex-grow mr-4 px-2 py-1 border border-gray-300 rounded"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <div className="text-white">{todo.text}</div>
                        )}
                        <div className="flex space-x-2">
                            {editingTodoId === todo.id ? (
                                <>
                                    <button
                                        onClick={() => saveEdit(todo.id)}
                                        className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={cancelEdit}
                                        className="text-white bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-gray-600 rounded text-md"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => startEditing(todo.id, todo.text)}
                                        className="text-white  border-0 py-1 px-4 focus:outline-none  rounded text-md"
                                    >
                                        <i className="fas fa-edit text-white bg-blue-500 border-0 py-3 px-5 focus:outline-none hover:bg-blue-800 rounded text-2xl" ></i>
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                                    >
                                         <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    </li>
                        </div>
                ))}
            </ul>
        </>
    );
};

export default Todo;
