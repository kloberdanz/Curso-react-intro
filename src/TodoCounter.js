import "./TodoCounter.css";

function TodoCounter({total, completed}){
    return(
      <h1>Has completado <span class="titleNum">{completed}</span> de <span class="titleNum">{total}</span> TODOs</h1>
    );
  }

  
  export { TodoCounter };