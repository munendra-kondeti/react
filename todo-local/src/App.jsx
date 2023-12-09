import {TodoProvider} from './contexts';
import {useState,useEffect} from 'react';
import './App.css'

function App() {
  const [todos,setTodo] = useState([]);
  

  const addTodo = (todo) =>{
    setTodo((prev) =>[{id:Date.now(),...todo},...prev]);
  }
  const updateTodo = (id,todo) =>{
    setTodo = ((prev) => prev.map((prevTodo)=>(prevTodo.id === todo.id ? todo : prevTodo)))
  }
  const deleteTodo = (id) =>{
    setTodo = ((prev) => prev.filter((todo)=>todo.id !== id))
  }
  const toggleComplete = (id) =>{
    setTodo = ((prev) => prev.map((todo) => todo.id === id ? {...prev,completed:!prev.completed} : prev))
  }
  useEffectively(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length> 0){
      setTodo(todos);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify())
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      
    </TodoProvider>
  )
}

export default App
