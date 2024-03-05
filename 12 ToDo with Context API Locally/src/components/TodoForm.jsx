import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {
  // for individual todoMsg to get add (we define state here)
  const [todoMsg, setTodoMsg] = useState('')
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()

    if (!todoMsg) {
      return;
    }

    addTodo({ todo: todoMsg, completed: false })
    // todo : todo == fxn in App.jsx todo param : individua todo from useState
    setTodoMsg('')
  }

  return (
    <form onSubmit = {add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
