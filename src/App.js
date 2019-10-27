import React from 'react';
import todos from './todos.json';
import TodoForm from './TodoForm';
import './app.css';

class App extends React.Component {

  state = {
    todos
  }

  handleAddTodo = (todo) => {
      this.setState({
        todos: [...this.state.todos, todo]
      })
  }

  removeTodo = (index) => {
    if (window.confirm('Estas seguro?')) {
    this.setState({
      todos: this.state.todos.filter((e,i) => {
        return i !== index
      })
    })
  }
  }

  render() {
    const todos = this.state.todos.map((todo,i) => {
      return (
        <div style={{margin: 10, display: "flex", border: "1px solid black"}} key={i}>
         <h2>{todo.title}</h2>
         <button onClick={this.removeTodo.bind(this,i)}>BORRAR</button>
        </div>
      )
    })

    return (
      <div>
          <h1>ToDo  <span>({todos.length})</span></h1>
        <div>
          <TodoForm onAddTodo={this.handleAddTodo} />
        </div>
        <div>
          { todos }
        </div>
      </div>
    );
  }
}

export default App;
