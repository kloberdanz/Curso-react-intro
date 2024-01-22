import { TodoCounter } from './TodoCounter';
import { TodoSearch }  from './TodoSearch';
import { TodoList }    from './TodoList';
import { TodoItem }    from './TodoItem';
import { CreateTodoButton } from './TodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [

{  text: "Cortar cebolla", completed: true},
{  text: "A llorar a la lloreria", completed: false},
{  text: "El cosito del coso", completed: true},
{  text: "Muchaaaachoss", completed: false},



];

function App() {
  return (
    <React.Fragment>

      <TodoCounter total={5} completed={2}/>
      <TodoSearch/>

      <TodoList>
        { defaultTodos.map(todo => (

          <TodoItem 
          key={todo.text}
          text={todo.text} 
          completed={todo.completed}
          />
        )
        ) }
      </TodoList>

    <CreateTodoButton/>

    </React.Fragment>
    
  );
}

export default App;
