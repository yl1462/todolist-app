import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Todolist extends Component {
  render() {
    return (
      <>
        <div className="toDoList">
          <ul>

            {
              this.props.todos.map(todo => (
                <li key={todo.id}>
                  <p>
                    {todo.title}<br />
                    {todo.description}<br />
                    <button><Link to={{pathname:`/edit/${todo.id}`, state:{todo}}}>Edit</Link> </button> <button onClick={() => this.props.deleteToDo(todo.id)}>Delete</button>
                  </p>
                </li>
              ))
            }
          </ul>
        </div>
        <button><Link to='/add'>Add New</Link></button>
      </>
    );
  }
}

export default Todolist;
