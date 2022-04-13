import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    todo: "aku",
    checked: false,
  },
  {
    todo: "Kamu",
    checked: false,
  },
  {
    todo: "Diaaku",
    checked: true,
  },
  {
    todo: "Mereka",
    checked: true,
  },
];

const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    todos: initialValue
  },
  reducers: {
    tambahTodo: (state, action) => {
      const newTodo = {
        ...action.payload
      }
      state.todos = [...state.todos, newTodo]
    },
    hapusTodo: (state, action) => {
      state.todos = state.todos.filter((todo, todoIdx) => {
        if (todoIdx !== action.payload) {
          // return selain card yang dipilih
          return {
            todo
          };
        }
        return false;
      })
    },
  }
});

export const { tambahTodo, hapusTodo } = TodoSlice.actions;

export default TodoSlice.reducer;