
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
  for (let i = 1; i <= 7; i++ ){
    initList.push({"index": i, "isSelected": false})
  }
  const randomNumberList = shuffleList(initList);

  return (
    <div className="uranai">
      <h1 className="common-title"><p><span>きやらめるちゃん</span><span>うらない</span></p></h1>
      <p>キャラメルを一つ選ぶめる！</p>
      <Container className="uranai-item">
        <img className="uranai-item__obj" src={`${process.env.PUBLIC_URL}/images/uranai/kc_uranai_obj.svg`} alt="きやらめるちゃんのすみか"></img>
        {randomNumberList.map((item,key) => {
          return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img className={`uranai-item__${key}`} onClick={() => clickCard(item)} key={key} src={`${process.env.PUBLIC_URL}/images/uranai/kc_uranai_item_0${key+1}.svg`} />
          )
        })}
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  p {
    width: 25%;
    /* padding: 20px; */
    /* background-color: #ffb70f; */
    border-radius: 30px;
    cursor: pointer;

    img {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 750px) {
    p {
      width: 100%;
    }
  }
`;

export default UranaiBefore;
