import React from "react";
import styled from "styled-components";
import ShindanBtn from "../parts/CommonBtn";

interface Props {
  shindanFlg: boolean;
  setShindanFlg: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShindanBefore: React.VFC<Props> = ({
  shindanFlg,
  setShindanFlg
}: Props) => {
  return (
    <div>
      <h1 className="common-title"><p><span>きやらめるポーズ</span><span>を伝授！</span></p></h1>
      <p className="common-text">あなたにピッタリなポーズを伝授しちゃうめる。</p>
      <ImgBox>
        <KiyarameruChan
          src={`${process.env.PUBLIC_URL}/kiyarameru.svg`}
        ></KiyarameruChan>
      </ImgBox>
      <ShindanBtn
        status={shindanFlg}
        setStatus={setShindanFlg}
        btnTxt={"伝授してもらう"}
        setIsLoading={undefined} />
    </div>
  );
};


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

export default ShindanBefore;
