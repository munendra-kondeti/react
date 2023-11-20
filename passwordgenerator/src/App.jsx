import { useState , useCallback , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const[numberAllowed,setNumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  const[password,setPassword] = useState('');
  const generatePassword = useCallback(()=>{
    let password = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";
    for (let i = 1; i <= length; i++){
      password += str.charAt(Math.floor(Math.random() * str.length)+1);
    }
    setPassword(password);
  },[length,charAllowed,numberAllowed]);

  useEffect(()=>{
    generatePassword()
  },[length,charAllowed,numberAllowed])

  const copyToClipboard = ()=>{
    window.navigator.clipboard.writeText(password);
    passRef.current ?.select();
  }
  const passRef = useRef();

  return (
    <div>
      <div>
         <h1>Password Generator</h1>
         <div >
          <input type="text"
          value={password}
          placeholder='password'
          readOnly
          ref={passRef}
          />
          <button onClick={copyToClipboard}>
            copy
          </button>
          </div>
      </div>
      <div>
        <div>
          <input 
          type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length {length}</label>

          <input 
          type="checkbox" 
          name="" 
          id="" 
          defaultChecked={numberAllowed}
          onChange={()=> setNumberAllowed((p)=>!p)}
          />
          <label htmlFor="numberAllowed"> numbers</label>

          <input 
          type="checkbox" 
          name="" 
          id="" 
          defaultChecked={charAllowed}
          onChange={()=> setCharAllowed((p)=>!p)}
          />
          <label htmlFor="character"> char</label>
        
        </div>
      </div>
    </div>
  )
}

export default App
