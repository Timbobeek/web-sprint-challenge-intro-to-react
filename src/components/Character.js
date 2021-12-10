import React from 'react';
import styled from 'styled-components';


const Character = props => {
  const { name } = props;

  return(
    <div className='name'>{name}</div>
  );
}

// Write your Character component here



export default Character;