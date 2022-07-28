import { Box, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const App: React.VFC = () => {
  const [value, setValue] = React.useState(0);
  console.log(value)
  const ChangeEl = () => {
    if (value === 0) {
      return <KiyarameruChan src={`${process.env.PUBLIC_URL}/kiyarameru.png`}></KiyarameruChan>
    } else if(value === 1) {
      return <p>1</p>
    } else {
      return <p>2</p>
    }
  }

  return(
    <Container>
      <Title>きやらめるちゃん</Title>
      <ChangeEl />
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="ほーむ" />
          <BottomNavigationAction label="じゃんけん" />
          <BottomNavigationAction label="しんだん" />
        </BottomNavigation>
      </Box>
    </Container>
  )
}

export default App;

const Container = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: center;
`

const Title = styled.h1`
  text-align: center;
  color: #ffba4a;
`

const KiyarameruChan = styled.img`
  width: 80%;
`
