import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios';
import styled from 'styled-components';

const StyledApp = styled.div`
  display:flex;
  flex-flow: column wrap;
  align-items: center;
  font-family: ${pr=>pr.theme.mainFont};
  font-weight: bold; 
  padding: 1%;
`

function App() {
  const [name, setName] = useState([])

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people')
      .then(res =>{
        console.log(res.data[0])
        setName(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[]);

  return(
    <StyledApp>
        <h1 className='Header'>Star Wars Characters</h1>
        {name.map(item => {
          return <Character name={item.name}/>
        })}
    </StyledApp>
  );
}

export default App;
