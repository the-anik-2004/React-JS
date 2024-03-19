import { useEffect, useState } from 'react'

// import './App.css'
import { TodoProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';


function App() {
const [todos,setTodos]=useState([]);

const addTodo=(todoMessage)=>{
    setTodos((prevTodo)=>[...prevTodo,{id:Date.now(),...todoMessage}])
}

 const updateTodo=(id,todoMessage)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?
  todoMessage : prevTodo)))
 }

 const deleteTodo=(id)=>{
  setTodos((e)=>e.filter((prevTodo)=>prevTodo.id!==id))
 }

 const checkTodo=(id)=>{
    setTodos((prev)=>prev
    .map((todo)=>todo.id===id?
    {...todo,checked:!todo.checked}:todo))
 }

useEffect(()=>{
const data=JSON.parse(localStorage.getItem("todoData"));
if(data && data.length>0){
  setTodos(data);
}
},[])

useEffect(()=>{
 localStorage.setItem('todoData',JSON.stringify(todos));
},[todos]);

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,checkTodo}}>
  
      <div className="bg-[#172842] min-h-screen py-8 w-screen">
                <div className="w-full max-w-2xl mx-auto shadow-md shadow-blue-300 rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                       {todos.map((todo)=>{
                        return(
                          <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo}/>
                          </div>
                        )
                       })}
                    </div>
                </div>
         </div>
    </TodoProvider>
  )
}

export default App
