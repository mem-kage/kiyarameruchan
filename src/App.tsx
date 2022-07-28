import React from 'react';
import styled from 'styled-components';
import KiyarameruChanPath from '../public/kiyarameru.png';

const App: React.VFC = () => {

  return(
    <Container>
      <Title>きやらめるちゃん</Title>
      <KiyarameruChan src={`${process.env.PUBLIC_URL}/kiyarameru.png`}></KiyarameruChan>
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
