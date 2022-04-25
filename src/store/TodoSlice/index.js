import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    todo: "Uji 1",
    checked: false,
  },
  {
    todo: "Uji 2",
    checked: false,
  },
  {
    todo: "Coba 1",
    checked: true,
  },
  {
    todo: "Coba 2",
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
        todo: action.payload,
        checked: false,
      }
      state.todos = [...state.todos, newTodo];
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
    checkedTodo: (state, action) => {
      console.log('ini action', action.payload);
      state.todos = state.todos.map((todo, todoIdx) => {
        if (todoIdx === action.payload[1]) {
          // return card yang dipilih
          return {
            ...todo,
            checked: action.payload[0],
          };
        }
        return todo;
      });
    }
  }
});

export const { tambahTodo, hapusTodo, checkedTodo } = TodoSlice.actions;

export default TodoSlice.reducer;