import "./TodoItem.css";


function TodoItem(props){
    return(
      <li>
        <span className={`check ${props.completed && "check--active"} `}></span>
        <p className={` ${props.completed && "complete "} `}>{props.text}</p>
        <span className="cancel"></span>
      </li>
    );
  }

  export { TodoItem };