import React, { useState } from "react";
import './App.css';
import Form from "./Components/Form";
import Header from "./Components/Header";
import Card from "./Components/Card";


const App = () => {
  const [inputs, setInputs] = useState({
    inputTodo: "",
  });

  return (
    <div className="App">
      <Header title="TodoList Ku" />
      <Form
        inputs={inputs}
        setInputs={setInputs}
      />
      <Card />
    </div>
  );
}

export default App;
