import React from "react";
import styled from "styled-components";
import ShindanBtn from "../parts/ShindanBtn";
import KCShindanTtl from "../../images/shindan/kc_sindan_ttl.svg"

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
      <ShindanTitle>きやらめるポーズを<br />伝授！</ShindanTitle>
      <Text>あなたにピッタリなポーズを伝授しちゃうめる。</Text>
      <ImgBox>
        <KiyarameruChan
          src={`${process.env.PUBLIC_URL}/kiyarameru.svg`}
        ></KiyarameruChan>
      </ImgBox>
      <ShindanBtn
        shindanFlg={shindanFlg}
        setShindanFlg={setShindanFlg}
        btnTxt={"お願いします"}
      />
    </div>
  );
};

const ShindanTitle = styled.h1`
  font-size: 24px;
  color: white;
  background-image: url(${process.env.PUBLIC_URL}/images/sindan/kc_sindan_ttl.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  padding-top: 10px;
  padding-bottom: 40px;
  font-size: 34px;
`;

const KiyarameruChan = styled.img`
  max-width: 300px;
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

const ImgBox = styled.div`
  width: 90%;
  margin: auto;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export default ShindanBefore;
