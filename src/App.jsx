import React from 'react'
import { useState } from 'react';
const App = () => {
  const [name,setname] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form");
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
      </form>
    </div>
  )
}

export default App
