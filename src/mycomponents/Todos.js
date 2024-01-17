import React from 'react'
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {

  let myStyle = {
    minHeight: "25rem",
    margin: "20px auto"
  }
  return (
    <div className='container my-2' style={myStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length === 0 ? "Nothing to do right now – enjoy a break!" :
        props.todos.map((todo) => {
          return (
              <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          )
        }
        )}
    </div>
  )
}
