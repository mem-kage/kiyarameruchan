import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const CommonTitle: React.VFC<Props> = ({children}: Props) => {
  return(
    <Title>{children}</Title>
  )
}

const Title = styled.h1`
  font-weight: bold;
`


export default CommonTitle;
