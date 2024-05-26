import React from "react"
import Header from "./components/Header"
import Todoitem from "./components/Todoitem"
import Button from "./components/Button"
import CounterComponent from "./components/CounterComponent"
import "./style.css"

const App=()=>{
  return (
    <div className="todo-Container">
    <CounterComponent/>
    <Header tittle= "TOdoi-APP"/>
      <Todoitem text= "Eat"/>
      <Todoitem text= "Code"/>
      <Todoitem text="Play"/>
      <Todoitem text="Study"/>
      <Todoitem text= "Sleep-Again"/>
      <Button/>
      
    </div>
  )
}
export default App