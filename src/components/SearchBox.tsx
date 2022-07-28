import styled from "styled-components";
import { Diary } from "../model";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchResults: Diary[];
  setSearchResults: React.Dispatch<React.SetStateAction<Diary[]>>;
  diaries: Diary[];
}

const SearchBox: React.VFC<Props> = ({search, setSearch, searchResults, setSearchResults, diaries}: Props) => {
  const createSearchResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    searchResults = diaries.filter((value) => (value.title.match(`^(?=.*${e.target.value}).*$`)) || (value.text.match(`^(?=.*${e.target.value}).*$`)))
    setSearchResults(searchResults)
    console.log(searchResults)
  }

  return(
    <StyledSearchBox onSubmit={(e) => e.preventDefault()}>
      <input placeholder="search keyword" value={search} onChange={(e) => createSearchResults(e)}/>
    </StyledSearchBox>
  )
}

const StyledSearchBox = styled.form`
  background-color: red;
`

export default SearchBox;