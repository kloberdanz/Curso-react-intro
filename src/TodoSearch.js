import "./TodoSearch.css";

function TodoSearch(){
    return(
      <input 
      onChange={ (event) => {
        console.log("escribiste ");
        console.log(event);
        console.log(event.target.value );
        console.log(event.target);

      }}
      placeholder="Cortar cebolla" />
    );
  }

  
  export { TodoSearch };