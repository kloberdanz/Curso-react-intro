import "./TodoItem.css";


function TodoItem(props){
    return(
      <li>
        <span className="check"></span>
        <p>{props.text}</p>
        <span className="cancel"></span>
      </li>
    );
  }

  export { TodoItem };