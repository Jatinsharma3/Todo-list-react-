import './App.css';
import Header from "./mycomponents/Header";
import { Todos } from "./mycomponents/Todos";
import { Footer } from "./mycomponents/footer/Footer";
import { Addtodo } from "./mycomponents/Addtodo";
import { About } from "./mycomponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes
} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("I am onDelete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // console.log("Deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    // console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>

        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Addtodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
