import React from "react";
import styled from "styled-components";

interface Props {
  selectedNumber: number;
}

const UranaiResult: React.VFC<Props> = ({selectedNumber}) => {
  const result = ["大吉","中吉","小吉","末吉","凶","大凶","メルメル","きやらめる","筋トレ"]

  return (
    <Container>
      <h3>占い後</h3>
      <p>{result[selectedNumber-1]}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
`;

export default UranaiResult;
