import React from "react";
import styled from "styled-components";
import ShindanResult from "./ShindanResult";
import ShindanSearchBox from "./parts/ShindanSearchBox";
import ShindanBtn from "./parts/ShindanBtn";

const Shindan: React.VFC = () => {
  const [shindanFlg, setShindanFlg] = React.useState(false);

  const Test = () => {
    if (shindanFlg) {
      return <KiyarameruChan src={`${process.env.PUBLIC_URL}/kiyarameru.png`}></KiyarameruChan>
    } else {
      return <p>teteetete</p>
    }
  }

  return(
    <>
      {shindanFlg === false ?
        <ShindanBtn shindanFlg={shindanFlg} setShindanFlg={setShindanFlg} btnTxt={"お願いします"} />:
        <ShindanBtn shindanFlg={shindanFlg} setShindanFlg={setShindanFlg} btnTxt={"もう一度お願いします"} />
      }
    </>
  )
}

const KiyarameruChan = styled.img`
  width: 80%;
`

export default Shindan;
