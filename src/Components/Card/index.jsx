import React from 'react'
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { hapusTodo } from '../../store/TodoSlice';
const Card = ({ listTodo, setListTodo }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.TodoList.todos);
  
  const handleChecked = (value, key) => {
    const newListTodo = listTodo.map((todo, todoIdx) => {
      if (todoIdx === key) {
        return {
          ...todo,
          checked: value,
        };
      }
      return todo;
    });
    setListTodo(newListTodo);
  };

  return (
    <div className={styles.card}>
      {
        todos.map((todo, todoIdx) => {
          return (
            <div className={styles.card_box} key={todoIdx}>
              <div className={styles.todo_list}>
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={(e) => handleChecked(e.target.checked, todoIdx)}
                />
                <div className={todo.checked ? styles.check : styles.uncheck}>{todo.todo}</div>
              </div>
              {/* panggil deleteTodo jika onClick */}
              <button onClick={() => dispatch(hapusTodo(todoIdx))}>delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card;