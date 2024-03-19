import {createContext,useContext} from "react";

export const TodoContext=createContext({
    todos:[
            {
                id:1,
                todoMsg:"Messege",
                checked:false
            }
        ],
    addTodo:(todoMessage)=>{},
    updateTodo:(id,todoMessage)=>{},
    checkTodo:(id)=>{},
    deleteTodo:(id)=>{}
});

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider;