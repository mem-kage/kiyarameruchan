import styled from "styled-components";
import { Diary } from "../model";

interface Props {
  diaries: Diary[];
  setDiaries: React.Dispatch<React.SetStateAction<Diary[]>>;
  setSearchResults: React.Dispatch<React.SetStateAction<Diary[]>>;
}

const CreateDiary: React.VFC<Props> = ({diaries, setDiaries, setSearchResults}: Props) => {
  let diaryText = "";

  const addDiary = (e:React.BaseSyntheticEvent) => {
    e.preventDefault()
    let today = new Date();
    let diaryId = today.getTime();
    let createTime = today.getFullYear() + "/" + today.getMonth() + "/" + today.getDay();
    setDiaries([...diaries, { id: diaryId, img: `${process.env.PUBLIC_URL}/miku.jpeg`, title: "test", text: diaryText, createTime: createTime}])
    e.target[0].value = null
    setSearchResults([])
  }

  return(
    <StyledCard onSubmit={(e) => addDiary(e)}>
      <p>ここは新規制作</p>
      <textarea onChange={(e) => diaryText=e.target.value} ></textarea>
      <input type="submit" value="作成"></input>
    </StyledCard>
  )
}

const StyledCard = styled.form`
  background-color: blue;
`

export default CreateDiary;