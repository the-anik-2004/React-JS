import { createSlice,nanoid} from "@reduxjs/toolkit";
//CreateSlice==>It is used make reducers, [acutually bigger than it]
//nanoid ==>it is used to provide unique id

const initialState={
    todos:[{id:1,text:"hello RTK"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
        },
        updateTodo:(state,action)=>{
            const{id,text}=action.payload;
            const existingTodo=state.todos.filter(todo=>todo.id=id);
            if(existingTodo){
                existingTodo.text=text;
            } 
        }
    }
});

export const{addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer
/**NOTES:
 * 1.In reducers functions you always have the access of state
 *  and action as function Argument .
 *      State-current state is accessed
 *      action-curreb=nt data
 */