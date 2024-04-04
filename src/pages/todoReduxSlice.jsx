import { createSlice } from "@reduxjs/toolkit";

const todoReduxSlice = createSlice({
  name: "addTodo",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todo.push(action.payload);
    },
    removeTodo(state) {
        state.todo.pop()
    }
  
  },
  
});

export default todoReduxSlice.reducer;
export const { addTodo, removeTodo } = todoReduxSlice.actions;
