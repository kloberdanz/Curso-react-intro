import "./TodoItem.css";


function TodoItem(props){
    return(
      <li>
        <span className="check check--active"></span>
        <p className="complete">{props.text}</p>
        <span className="cancel"></span>
      </li>
    );
  }

  export { TodoItem };