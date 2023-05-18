import { Todo } from "./constantFile";
import axios, { AxiosResponse } from "axios"
export const addTodo=async(newTodo:Todo)=>{
   let res:AxiosResponse<Todo>=await axios.post(` http://localhost:8080/posts`,newTodo)
    console.log(res)
//    return res
}
export const getTodo=async()=>{
    let res:AxiosResponse<Todo[]>=await axios.get(`http://localhost:8080/posts`)
    console.log(res.data)
    return res.data
}