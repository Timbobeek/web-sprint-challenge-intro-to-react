import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios';

function App() {
  const [name, setName] = useState('')

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people')
      .then(res =>{
        //console.log(res.data[0].name)
        setName(res.data[0].name)
      })
      .catch(err =>{
        console.log(err)
      })
  },[]);

  return(
    <div className='App'>
        <h1 className='Header'>Characters</h1>
        <Character name={name}/>
    </div>
  );
}

export default App;
