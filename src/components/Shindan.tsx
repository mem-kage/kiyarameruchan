import React from "react";
import ShindanBtn from "./parts/ShindanBtn";
import CommonTitle from "./parts/CommonTitle";
import styled from "styled-components";

const Shindan: React.VFC = () => {
  const [shindanFlg, setShindanFlg] = React.useState(false);

  return (
    <>
      {shindanFlg === false ? (
        <>
          <CommonTitle>{`きやらめるポーズを伝授！`}</CommonTitle>
          <FlexItem>
            <p>あなたにピッタリなポーズを伝授しちゃうめる。</p>
            <ItemImg>
              <KiyarameruChan src={`${process.env.PUBLIC_URL}/kiyarameru.png`}></KiyarameruChan>
            </ItemImg>
          </FlexItem>
          <ShindanBtn
            shindanFlg={shindanFlg}
            setShindanFlg={setShindanFlg}
            btnTxt={"お願いします"}
          />
        </>
      ) : (
        <>
          <FlexItem>
              <p>ポーズ使えや</p>
              <ItemImg>
                <KiyarameruChan src={`${process.env.PUBLIC_URL}/kiyarameru.png`}></KiyarameruChan>
              </ItemImg>
          </FlexItem>
          <ShindanBtn
            shindanFlg={shindanFlg}
            setShindanFlg={setShindanFlg}
            btnTxt={"もう一度お願いします"}
          />
        </>
      )}
    </>
  );
};

const FlexItem = styled.div`
  display: flex;
  align-items: center;
`

const KiyarameruChan = styled.img`
  max-width: 100%;
`

const ItemImg = styled.div`
  width: 70%;
`

export default Shindan;
