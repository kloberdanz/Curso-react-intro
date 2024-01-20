import "./TodoCounter.css";

function TodoCounter({total, completed}){
    return(
      <h1>Has completado<br/> <span className="titleNum">{completed}</span> de <span className="titleNum">{total}</span> TODOs</h1>
    );
  }

  
  export { TodoCounter };