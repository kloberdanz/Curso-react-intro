import { TodoCounter } from './TodoCounter';
import { TodoSearch }  from './TodoSearch';
import { TodoList }    from './TodoList';
import { TodoItem }    from './TodoItem';
import { CreateTodoButton } from './TodoButton';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter total={5} completed={2}/>
      <TodoSearch/>

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

    <CreateTodoButton/>

    </div>
  );
}

export default App;
