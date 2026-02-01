import React from 'react'
import { useState } from 'react';
const App = () => {
  const [name,setname] = useState('');
  const [allUsers,setallUsers] = useState(['harsh'])

  const submitHandler = (e) => {
    e.preventDefault();
    const newAllUsers = [...allUsers]
    newAllUsers.push(name)
    console.log(newAllUsers)
    setallUsers(newAllUsers);
  }
  return (
    <div>
      <form onSubmit={(e)=>{
          submitHandler(e);

      }}>
        <input type="text" required placeholder='Enter name' value={name}   onChange={(e)=>{
         setname(e.target.value); 
         console.log(e.target.value)
        }}/>
        <button>Submit</button>
        {
          allUsers.map((elem,idx)=>{
            return <h1 key={idx}>{elem}</h1>
 
          })
        }
      </form>
    </div>
  )
}

export default App
