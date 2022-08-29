
import React from "react";
import styled from "styled-components";

interface Props {
  uranaiFlg: boolean;
  setUranaiFlg: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedNumber: React.Dispatch<React.SetStateAction<number>>;
}

const UranaiBefore: React.VFC<Props> = ({
  uranaiFlg,
  setUranaiFlg,
  setSelectedNumber,
}: Props) => {

  const shuffleList = ([...array]) => {
    console.log(array)
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const clickCard = (item: any) => {
    item["isSelected"] = !item["isSelected"]
    setSelectedNumber(item["index"])
    setUranaiFlg(!uranaiFlg)
  }

  let initList = []
  for (let i = 1; i <= 9; i++ ){
    initList.push({"index": i, "isSelected": false})
  }
  const randomNumberList = shuffleList(initList);

  return (
    <Container>
      {randomNumberList.map((item,key) => {
        return (
          // eslint-disable-next-line jsx-a11y/alt-text
          <p onClick={() => clickCard(item)} key={key}><img src={`${process.env.PUBLIC_URL}/kiyarameru.svg`} />{item["index"]}</p>
        )
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  p {
    width: 25%;
    padding: 20px;
    background-color: #ffb70f;
    border-radius: 30px;
    cursor: pointer;

    img {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 750px) {
    p {
      width: 20%;
    }
  }
`;

export default UranaiBefore;