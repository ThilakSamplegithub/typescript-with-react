import { useState,useEffect } from "react"
import { Todo } from "./constantFile"
import { addTodo, getTodo } from "./Api"
import { TodoItems } from "./TodoItems"
import { TodoInput } from "./TodoInput"
export const TodoApp=()=>{
    const [todo,setTodo]=useState<Todo[]>([])
    const [change,setChange]=useState<boolean>(false)
    function handleUpdate(){
        setChange((prev:boolean)=>!prev)
        console.log("change is",change)
    }
    useEffect(()=>{
        getTodo().then((res:Todo[])=>{setTodo(res)})
    },[change])
    return<>
    <h1>TodoApp</h1>
    <TodoInput />
    {todo.map((el)=><TodoItems key={el.id} {...el} handleUpdate={handleUpdate} />)}
    </>
}