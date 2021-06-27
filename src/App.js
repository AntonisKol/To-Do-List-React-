import './App.css';
import React from 'react'
import TodoItem from "./components/TodoItem"
import todoItemsData from'./components/todosData'
import Input from './components/Input'
 
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoItemsData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                  return {
                      ...todo,
                      completed: !todo.completed
                  }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                <h2>To DO List <br/>
                React</h2>
                   <Input/>
                {todoItems}
             
            </div>
        )    
    }
}

export default App