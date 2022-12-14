import React, { useEffect } from "react";
import styled from "styled-components";
import kc from '../assets/images/kiyarameru.gif'

interface Props {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingTxt: string;
}

const Loading: React.VFC<Props> = ({
  isLoading,
  setIsLoading,
  loadingTxt
}: Props) => {

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading)
    }, 1500)
  })

  return (
    <>
    <LoadingWrap>
      <LoadingBg />
      <LoadingItem>
        <LoadingTxt>{loadingTxt}</LoadingTxt>
        <img className="load-img" src={kc} alt="きやらめるちゃんローディング" />
      </LoadingItem>
    </LoadingWrap>

    </>
  );
};

const LoadingWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  /* background-color: rgba(100,100,100,0.6); */
`;

const LoadingBg = styled.div`
  background-color: #ffe397;
  border-radius: 50%;
  height: 200vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200vw;
`;

const LoadingItem = styled.div`
  height: 100%;

  p,img {
    position: relative;
    top: 30%;
    display: block;
    margin: auto;
    text-align: center;
    color: white;
    margin-bottom: 30px;
  }
`;


const LoadingTxt = styled.p`
  font-weight: bold;
  font-size: 30px;
`;

const KiyarameruChan = styled.img`
  @media screen and (max-width: 750px) {
    width: 60%;
  }
`

export default Loading;
