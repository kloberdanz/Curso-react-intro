import "./TodoButton.css";


function CreateTodoButton(){
    return (
        <button
        onClick={ () => console.log("clic")}
        ><span className="Add"></span></button>
    );
}

export {CreateTodoButton};