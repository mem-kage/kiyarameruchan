import React from "react";
import styled from "styled-components";

interface Props {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  btnTxt: String;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const CommonBtn: React.VFC<Props> = ({status, setStatus, btnTxt, setIsLoading}: Props) => {
  const changeFlg = () => {
    setStatus(!status)

    if (setIsLoading !== undefined) {
      setIsLoading(true)
    }
  }

  return(
    <Btn onClick={changeFlg} >{btnTxt}</Btn>
  )
}

const Btn = styled.button`
  width: 80%;
  border: unset;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
  color: #D77824;
  font-weight: bold;
  font-size: 20px;
  position: relative;

  :active {
    background-color: #D77824;
    color: white;
  }

  :after {
    content: "";
    display: flex;
    width: 100%;
    height: 100%;
    background: #D77824;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 15px;
    z-index: -1;
  }

  @media screen and (max-width: 750px) {
    font-size: calc(1rem + ((1vw - 3.75px) * 4.2667));
  }
`


export default CommonBtn;
