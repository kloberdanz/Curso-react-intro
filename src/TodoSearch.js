import React from "react";
import "./TodoSearch.css";

function TodoSearch(){
  const [searchValue, setSearchValue] = React.useState("");

  console.log("Los USUARIOS buscan todos de " + searchValue );

    return(
      <input 
      value={searchValue}
      onChange={ (event) => {
        setSearchValue( event.target.value );

      }}
      placeholder="Cortar cebolla" />
    );
  }

  
  export { TodoSearch };