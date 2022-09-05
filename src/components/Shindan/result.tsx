import React from "react";
import styled from "styled-components";
import ShindanBtn from "../parts/CommonBtn";

interface Props {
  shindanFlg: boolean;
  setShindanFlg: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShindanResult: React.VFC<Props> = ({
  shindanFlg,
  setShindanFlg,
  setIsLoading
}: Props) => {
  const randamNumber = Math.floor(Math.random() * 3) + 1;
  const imgUrl = "/images/sindan/result/kc_ps_item_0"+ randamNumber +".svg";
  console.log(randamNumber)
  // useLayoutEffect(() => {

  // });

  return (
    <div>
      <h3>ダミー</h3>
      <ImgBox>
        <KiyarameruChan
          src={`${process.env.PUBLIC_URL}${imgUrl}`}
        ></KiyarameruChan>
      </ImgBox>
      <ShindanBtn
        status={shindanFlg}
        setStatus={setShindanFlg}
        btnTxt={"もう一度診断する"}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

const KiyarameruChan = styled.img`
  max-width: 300px;
  /* animation: mocchiri 3s infinite;
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
  } */
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

export default ShindanResult;
