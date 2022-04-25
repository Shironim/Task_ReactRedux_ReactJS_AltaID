import React from 'react'
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { tambahTodo } from '../../store/TodoSlice';
const Form = ({ inputs, setInputs }) => {

  const dispact = useDispatch();

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };

    newInputs[key] = value;

    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispact(tambahTodo(inputs.inputTodo));

    setInputs({
      inputTodo: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}
      className={styles.form_container}
    >
      <div className={styles.form_box}>
        <input className={styles.input_form}
          type="text"
          value={inputs.inputTodo}
          placeholder="Add your task here"
          onChange={(e) => handleInput(e.target.value, 'inputTodo')} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
export default Form