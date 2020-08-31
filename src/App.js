import React from "react";
import "./App.css";
// Importing components
import Form from "./components/Form";
import TodoList from "./components/Form";

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDo List with ReactJS</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
