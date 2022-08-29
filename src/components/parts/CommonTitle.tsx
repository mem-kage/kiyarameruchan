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
  color: white;
  background-image: url(${process.env.PUBLIC_URL}/images/sindan/kc_sindan_ttl.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  padding-top: 10px;
  padding-bottom: 40px;
  font-size: 45px;
  margin: 0;

  @media screen and (max-width: 750px) {
    padding-bottom: 30px;
    font-size: calc(1.75rem + ((1vw - 3.75px) * 5.8667));
  }

  span {
    display: block;
  }

`

export default CommonTitle;
