import React, { useState, useContext } from 'react'
import UserContext from '../context/01 UserContext'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        style={{padding : "1rem"}}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      {" "}
      <input
        type="text"
        value={password}
        style={{padding : "1rem"}}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      /> <br />
      <button onClick={handleSubmit} style={{padding : "1rem", marginTop:"1rem"}}>Submit</button>
    </div>
  )
}

export default Login
