import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
  padding: 1%;
  width: 50%;
  color: purple;
  background-color: beige;
`

const Character = props => {
  const { name } = props;

  return(
    <StyledCharacter>
      <div className='name'>{name}</div>
    </StyledCharacter>
  );
}

// Write your Character component here



export default Character;