import { createSlice } from "@reduxjs/toolkit";

const todoReduxSlice = createSlice({
  name: "Todo",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todo.push({
        id: Math.random().toString(36).substring(2, 9),
        text: action.payload,
        done: false,
      });
    },

      doneTodo(state,action) {
        state.todo.done
      },
    

    removeTodo(state) {
      state.todo.pop();
    },
  },
});

export default todoReduxSlice.reducer;
export const { addTodo, removeTodo, doneTodo } = todoReduxSlice.actions;
