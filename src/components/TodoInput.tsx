import {useState} from "react"
import { addTodo } from "./Api"
// import { getTodo } from "./Api"
import { Todo } from "./constantFile"
export function TodoInput(){
    const[title,setTitle]=useState<string>("")   
    function handleSubmit(e:React.MouseEvent<HTMLButtonElement>){
        const newTodo:Todo={
          title,
          status:false
        }
        addTodo(newTodo)
        setTitle("")
    }
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setTitle(e.target.value)
     }
    return<>
    <input placeholder="Enter Todo" onChange={handleChange}/>
    <button onClick={handleSubmit}>Add</button>
    </>
}