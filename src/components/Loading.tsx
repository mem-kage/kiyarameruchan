import React, { useEffect } from "react";
import styled from "styled-components";

interface Props {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loading: React.VFC<Props> = ({
  isLoading,
  setIsLoading,
}: Props) => {

  useEffect(() => {
    console.log("open loading page");
    setTimeout(() => {
      setIsLoading(!isLoading)
    }, 5000)
  })

  return (
    <>
    <LoadingWrap>
      <LoadingTxt>ロード中</LoadingTxt>
      <KiyarameruChan src={`${process.env.PUBLIC_URL}/kiyarameru.svg`} className={"mocchiri"} />
    </LoadingWrap>

    </>
  );
};

const LoadingWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(100,100,100,0.6);

  p,img {
    position: relative;
    top: 30%;
  }
`;

const LoadingTxt = styled.p`
  font-weight: bold;
  font-size: 30px;
`;

const KiyarameruChan = styled.img`
  width: 60%;
`

export default Loading;
