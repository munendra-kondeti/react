import { useState } from 'react';
import './App.css'


function App() {

  const [counter, setCount] = useState(0);

function addValue() {
  /* its give batch problem so we use the callback function to solve it
 setCount(counter+1);
 setCount(counter+1);
 */
setCount((counter)=>counter+1);

}
const removeValue =()=>{
  
  setCount((counter)=> counter-1);
}

  return (
    <>
    <h1>Vite app </h1>
    <h2>Counter value: {counter} </h2>
    <button 
    onClick={addValue}
    >Add value</button>{" "}
    <button
    onClick={removeValue}
    >Remove value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
