import { useState } from 'react'

import './App.css'

function App() {
  const [color,setBackgroundColor] = useState('olive');
  function changeBGColor(color) {
    setBackgroundColor(color);
  }
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}> 
      <div className="fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={()=>changeBGColor("Red")}
          >Red </button>
          <button
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={()=> setBackgroundColor("Blue")}
          >Blue </button>
          <button
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={()=> setBackgroundColor("pink")}
          >pink </button>
          
        </div>
      </div>
    </div>
  )
}

export default App
