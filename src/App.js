import React from "react";
import TodoList from "./TodoList"
import ToggleVisibility from "./ToggleVisibility";
import "./style.css";


function App() {
  return (
    
    


    <div className="App">
      <ToggleVisibility>
        <TodoList />
      </ToggleVisibility>
    </div>

  )
}

export default App;