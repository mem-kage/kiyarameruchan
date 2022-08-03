import React from "react";
import styled from "styled-components";
import ShindanBtn from "../parts/ShindanBtn";

interface Props {
  shindanFlg: boolean;
  setShindanFlg: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShindanResult: React.VFC<Props> = ({ shindanFlg, setShindanFlg }: Props) => {

  return (
    <div>
      <FlexItem>
        <p>ポーズ使えや</p>
        <ItemImg>
          <KiyarameruChan
            src={`${process.env.PUBLIC_URL}/kiyarameru.png`}
          ></KiyarameruChan>
        </ItemImg>
      </FlexItem>
      <ShindanBtn
        shindanFlg={shindanFlg}
        setShindanFlg={setShindanFlg}
        btnTxt={"もう一度お願いします"}
      />
    </div>
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

export default ShindanResult;
