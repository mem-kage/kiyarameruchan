import styled from "styled-components";
import { Diary } from "../model";

interface Props {
  item: Diary;
}

const Card: React.VFC<Props> = ({item}: Props) => {
  return(
    <StyledCard>
      <p><img src={item.img} alt="logo"></img></p>
      <StyledCardContents>
        <StyledCardTitle>{item.title}</StyledCardTitle>
        <StyledCardText>{item.text}</StyledCardText>
      </StyledCardContents>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  background-color: whitesmoke;
  width: 32%;
  box-sizing: border-box;
  margin-top: 8px;
  border-radius: 20px 20px 5px 5px;
  overflow: hidden;

  p {
    margin-top: 0;
    color: black;
  }

  img {
    width: 100%;
  }
`

const StyledCardContents = styled.div`
  margin: 0 8px;
`

const StyledCardTitle = styled.p`
  font-size: 1.3rem;
`

const StyledCardText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
`

export default Card;