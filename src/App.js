
import {useState} from "react";
import axios from 'axios';

function App() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(username,email,password)
    axios.post('http://localhost:8000',
    {
      username:username,
      email: email,
      password: password
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

    }
  }
  return (
   <div classname="App">
    Signup
    <from>
      <p>Username</p>
      <input 
      required 
      type="text"
      value={username}
      onChange={(e)=>{
        setUsername(e.target.value)
      }}></input>

      <p>Email</p>
      <input 
      required 
      type="email"
      value={email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}></input>
      <p>Password</p>
      <input 
      required 
      type="text"
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}>
      </input>
      <button type='submit'>submit</button>

    </from>
   </div>
  );


export default App;
