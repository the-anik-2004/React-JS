import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{id:1,text:"Hello RTK"}]
}

export const todoSlice=createSlice({
    name:"todo",
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
            state.todos=state.todos.filter(todo=>todo.id!=action.payload);
        },
        updateTodo:(state,action)=>{
            const exsitingTodo=state.todos.find(todo=>todo.id===action.payload);
            if(exsitingTodo){
                exsitingTodo.text=action.payload;
            }
        },

    }
});

export const{addTodo,removeTodo,updateTodo} =todoSlice.actions;
// export const{addTodo,removeTodo} =todoSlice.actions;
export default todoSlice.reducer;



/**NOTES:-
 * "nanoid"- creates a unique id
 * first...Import createState and nonoid
 * second...make an initial state
 * third... create todoSlice
 *          ->give a name
 *          ->mention initial state
 *          ->Define reducer functions in reducers object
 *              ...state->give you the current state 
 *              and action->give you values
 * fourth...exporting happens in two parts..
 *          ->Export the functionalities of reducers individually.
 *          ->Export the registered reducers.
 */