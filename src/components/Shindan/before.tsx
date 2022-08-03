import React from "react";
import styled from "styled-components";
import CommonTitle from "../parts/CommonTitle";
import ShindanBtn from "../parts/ShindanBtn";

interface Props {
  shindanFlg: boolean;
  setShindanFlg: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShindanBefore: React.VFC<Props> = ({
  shindanFlg,
  setShindanFlg,
}: Props) => {
  return (
    <div>
      <CommonTitle>{`きやらめるポーズを伝授！`}</CommonTitle>
      <FlexItem>
        <p>あなたにピッタリなポーズを伝授しちゃうめる。</p>
        <ItemImg>
          <KiyarameruChan
            src={`${process.env.PUBLIC_URL}/kiyarameru.png`}
          ></KiyarameruChan>
        </ItemImg>
      </FlexItem>
      <ShindanBtn
        shindanFlg={shindanFlg}
        setShindanFlg={setShindanFlg}
        btnTxt={"お願いします"}
      />
    </div>
  );
};

const FlexItem = styled.div`
  display: flex;
  align-items: center;
`;

const KiyarameruChan = styled.img`
  max-width: 100%;
  animation: mocchiri 3s infinite;
  @keyframes mocchiri {
    0% {
        transform: scale(1, 0.8);
    }
    20% {
        transform: scale(0.8, 1.1);
    }
    95% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(1, 0.8);
    }
  }
`;

const ItemImg = styled.div`
  width: 70%;
`;

export default ShindanBefore;
