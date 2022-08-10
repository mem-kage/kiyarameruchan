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
      <ShindanTitle><span>きやらめるポーズ</span><span>を伝授！</span></ShindanTitle>
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
  color: white;
  background-image: url(${process.env.PUBLIC_URL}/images/sindan/kc_sindan_ttl.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 34px;
  margin: 0;

  @media screen and (max-width: 750px) {
    font-size: calc(1.75rem + ((1vw - 3.75px) * 5.8667));
  }

  span {
    display: block;
  }
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
  margin: 20px auto;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 750px) {
    margin: calc(0.6875rem + ((1vw - 3.75px) * 2.9333)) 0;
    font-size: calc(0.875rem + ((1vw - 3.75px) * 3.7333));
  }
`;

export default ShindanBefore;
