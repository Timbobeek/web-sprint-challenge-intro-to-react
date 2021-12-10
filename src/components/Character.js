import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
  padding: 1%;
  width: 50%;
  color: ${pr=>pr.theme.tertiaryColor};
  border-radius: 20px;
  border-width: 10px;
  border-style: dashed;
  border-color: ${pr=>pr.theme.secondaryColor};
  background-color: ${pr=>pr.theme.primaryColor};
  font-family: ${pr=>pr.theme.mainFont};
  font-size: 1em;
  display:flex;
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 1%;
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