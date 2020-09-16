import React from 'react';
import Button from './styleComponents/Button';
import styled, { ThemeProvider } from 'styled-components';

const AppBlock = styled.div`
  width:512px;
  margin:0 auto;
  margin-top:4rem;
  border:1px solid black;
  padding:1rem;
`
const pallete = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
}
const ButtonGroup = styled.div`
&+&{
  margin-top:1rem
}
`

function App() {
  return (
    <ThemeProvider theme={{ pallete }}>
      <AppBlock>
        <ButtonGroup>
          <Button size='large'>BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size='small'>BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color='gray' size='large'>BUTTON</Button>
          <Button color='gray'>BUTTON</Button>
          <Button color='gray' size='small'>BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color='pink' size='large'>BUTTON</Button>
          <Button color='pink'>BUTTON</Button>
          <Button color='pink' size='small'>BUTTON</Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  )
}

export default App;