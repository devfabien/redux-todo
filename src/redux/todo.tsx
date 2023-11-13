import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialValue = [
  {
    id: "",
    text: "",
    isCompleted: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: { value: initialValue },
  reducers: {
    addTodo: (state, action) => {
      state.value = [
        ...state.value,
        { id: nanoid(), text: action.payload, isCompleted: false },
      ];
    },

    deleteTodo: (state, action) => {
      const newArr = state.value.filter((item) => item.id !== action.payload);
      return { ...state, value: [...newArr] };
    },

    completedTodo: (state, action) => {
      const newArr = state.value.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
      return { ...state, value: [...newArr] };
    },
  },
});
export default todoSlice.reducer;
export const { addTodo, deleteTodo, completedTodo } = todoSlice.actions;
