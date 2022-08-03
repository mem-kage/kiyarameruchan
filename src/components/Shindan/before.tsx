import React from "react";
import styled from "styled-components";
import CommonTitle from "../parts/CommonTitle";
import ShindanBtn from "../parts/ShindanBtn";

interface Props {
  shindanFlg: boolean;
  setShindanFlg: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShindanBefore: React.VFC<Props> = ({
  shindanFlg,
  setShindanFlg,
}: Props) => {
  return (
    <>
      <CommonTitle>{`きやらめるポーズを伝授！`}</CommonTitle>
      <FlexItem>
        <p>あなたにピッタリなポーズを伝授しちゃうめる。</p>
        <ItemImg>
          <KiyarameruChan
            src={`${process.env.PUBLIC_URL}/kiyarameru.png`}
          ></KiyarameruChan>
        </ItemImg>
      </FlexItem>
      <ShindanBtn
        shindanFlg={shindanFlg}
        setShindanFlg={setShindanFlg}
        btnTxt={"お願いします"}
      />
    </>
  );
};

const FlexItem = styled.div`
  display: flex;
  align-items: center;
`;

const KiyarameruChan = styled.img`
  max-width: 100%;
`;

const ItemImg = styled.div`
  width: 70%;
`;

export default ShindanBefore;
