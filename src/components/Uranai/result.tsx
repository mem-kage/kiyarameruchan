import React from "react";
import styled from "styled-components";
import UranaiBtn from "../parts/CommonBtn";

interface Props {
  uranaiFlg: boolean;
  setUranaiFlg: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedNumber: number;
}

const UranaiResult: React.VFC<Props> = ({uranaiFlg, setUranaiFlg, setIsLoading, selectedNumber}) => {
  const result = ["大吉","中吉","小吉","末吉","凶","大凶","メルメル","きやらめる","筋トレ"]

  return (
    <Container>
      <h3>占い後</h3>
      <p>{result[selectedNumber-1]}</p>
      <UranaiBtn
        status={uranaiFlg}
        setStatus={setUranaiFlg}
        btnTxt={"もう一度占うめる"}
        setIsLoading={setIsLoading}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
`;

export default UranaiResult;
