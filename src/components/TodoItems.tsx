import { Todo } from "./constantFile"
type Todoproptypes ={
    id?:number;
    title:string;
    status:boolean;
 handleUpdate:()=>void
}
export const TodoItems=({id,title,status,handleUpdate}:Todoproptypes)=>{
    console.log('in',handleUpdate())
    return<>
    <p>{title}-{status?"completed":"pending"}</p>
    </>
}