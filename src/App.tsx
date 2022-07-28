import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import CreateDiary from './components/CreateDiary';
import SearchBox from './components/SearchBox';
import { Diary } from './model';

const App: React.VFC = () => {
  const [search, setSearch] = useState<string>('');
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [searchResults, setSearchResults] = useState<Diary[]>([]);

  return(
    <Container>
      <Title>日記</Title>
      <SearchBox search={search} setSearch={setSearch} searchResults={searchResults} setSearchResults={setSearchResults} diaries={diaries}></SearchBox>
      <CreateDiary setSearchResults={setSearchResults} diaries={diaries} setDiaries={setDiaries}></CreateDiary>
      <Cards>
        {searchResults?.length ? (
          searchResults.map((item, index) => (
            <Card item={item} key={index}></Card>
          ))
        ) : (
          diaries.map((item, index) => (
            <Card item={item} key={index}></Card>
          ))
        )}
      </Cards>
    </Container>
  )
}

export default App;

const Container = styled.div`
  color: whitesmoke;
`

const Title = styled.h1`
  text-align: center;
`

const Cards = styled.div`
  width: 96%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &::after {
    display: block;
    width: 32%;
    content:"";
  }
`