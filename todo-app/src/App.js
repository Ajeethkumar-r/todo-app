import React ,{useEffect, useState} from 'react';
import logo from './logo.svg';
import Todo from './Todo';
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import db from './firebase'


function App() {
  
  const [todos,setTodos] = useState([])
  const [input,setInput] = useState([''])

  useEffect(()=> {db.collection("todos").onSnapshot(snapshot=>{setTodos(snapshot.docs.map(doc=>doc.data().todo))
  })
   },[input])

  const addTodo = (event) =>{
    event.preventDefault();
    setTodos([...todos,input]);    
    setInput('')
  }
  return (
    <div className="App">
      <h1>Actioner!</h1>
      <form>
        <FormControl>
          <InputLabel>💡Mark Action</InputLabel>
          <Input value={input} onChange= {event =>setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Mark</Button>
      </form> 
      <ul>
       {todos.map(todo => (
         <Todo text={todo}/>
        ))} 
      </ul>
    </div>
  );
}

export default App;
