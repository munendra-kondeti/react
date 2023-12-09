import React, { useState } from 'react'

function Login() {
    const [userName,useUserName] = useState('');
    const [passwd,setPasswd] = useState('');

    const handleSubmit = (e) =>{
        // prevent refresing
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={userName} onChange={(e)=> useUserName(e.target.value)} placeholder='username'/>
            <input type="password" value={passwd} onChange={(e)=>setPasswd(e.target.value)} placeholder='username'/>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
    </div>

  )
}

export default Login