import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: "",
    text: "",
    isCompleted: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
