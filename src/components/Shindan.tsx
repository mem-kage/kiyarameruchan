import React from "react";
import styled from "styled-components";
import ShindanResult from "./ShindanResult";
import ShindanSearchBox from "./ShindanSearchBox";

const Shindan: React.VFC = () => {
  const [target, setTarget] = React.useState("");
  const [shindanFlg, setShindanFlg] = React.useState(false);

  const Test = () => {
    if (shindanFlg) {
      console.log(1234)
      return <KiyarameruChan src={`${process.env.PUBLIC_URL}/kiyarameru.png`}></KiyarameruChan>
    } else {
      return <p>teteetete</p>
    }
  }

  return(
    <>
      {shindanFlg === false ?
        <ShindanSearchBox target={target} setTarget={setTarget} setShindanFlg={setShindanFlg}></ShindanSearchBox>:
        <ShindanResult shindanFlg={shindanFlg} setShindanFlg={setShindanFlg}></ShindanResult>
      }
    </>
  )
}

const KiyarameruChan = styled.img`
  width: 80%;
`

export default Shindan;
