import {createSlice, nanoid} from '@reduxjs/toolkit';

// initialState is an object here but todos is an array.
const initialState = {
    // todos: [
    //     {
    //         id: 1,
    //         text: "Hello World"
    //     }
    // ]

    // storing locally
    todos: JSON.parse(localStorage.getItem('todos')) || [{ id: 1, text: "Hello World"}] 
}

// State get access of inital state
// We get values for another fxn using action
export const todoSlice = createSlice({
    name: 'todoApp',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload, // treat it like action.payload.text
                // payload itself is an object. so we can fetchh more things from payload like id, email, etc.
            }
            state.todos.push(todo); // state.initialState.push(newly created todo in const todo)
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            // treat it like action.payload.id
            localStorage.setItem('todos', JSON.stringify(state.todos)); 
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => (todo.id === action.payload ? action.payload : todo))
            // todo.id === action.payload.id ? action.payload.text : todo
            localStorage.setItem('todos', JSON.stringify(state.todos));
        }
    }
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;