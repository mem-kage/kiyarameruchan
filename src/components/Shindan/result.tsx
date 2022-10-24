import React from "react";
import styled from "styled-components";
import ShindanTxtBtn from "../parts/CommonTxtBtn";
import ShindanTopBtn from "../parts/CommonTopBtn";
import ShindanTxt from "../parts/CommonTxt";
import CommonModalBtn from "../parts/CommonModal";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import SNSBtn from '../parts/CommonSNS';
import { Helmet } from 'react-helmet';

interface Props {
  shindanFlg: boolean;
  setShindanFlg: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const ShindanResult: React.VFC<Props> = ({
  shindanFlg,
  setShindanFlg,
  setIsLoading,
  setValue
}: Props) => {
  const randamNumber = Math.floor(Math.random() * 8);
  const imgUrl = "/images/sindan/result/kc_ps_item_0"+ (randamNumber+1) +".png";
  const titleList = ["哀愁漂う後ろ姿...","寝そべる。","集合写真 でしゃばリポーズ","さぁて 討論しようぜポーズ","韓国式の挙手","お待たせポーズ","覗き見ポーズ","心ここにあらずポーズ"]
  const imgFileName = "kc_kawaii_0" + (randamNumber+1) + ".png";

  return (
    <>
      {/* <Helmet
        title={`きやらめるちゃんポーズ結果める！`}
        meta={[
            { property: 'og:title', content: titleList[randamNumber] },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://mem-kage.github.io/kiyarameruchan/' },
            { property: 'og:image', content: `${process.env.PUBLIC_URL}${imgUrl}` },
            { property: 'og:description', content: titleList[randamNumber] },
        ]}
      /> */}
      <div className="shindan-result-wrap">
        <h1 className="common-title"><p>{titleList[randamNumber]}</p></h1>
        <ImgBox>
          <KiyarameruChan
            src={`${process.env.PUBLIC_URL}${imgUrl}`}
          ></KiyarameruChan>
        </ImgBox>

        <ul className="flex-items">
          <div>
            <ArrowLeftIcon fontSize="medium" />
            <ShindanTopBtn
              btnTxt={"Topに戻る"}
              setIsLoading={setIsLoading}
              setValue={setValue}
            />
          </div>
          <ShindanTxtBtn
            status={shindanFlg}
            setStatus={setShindanFlg}
            btnTxt={"もう一度"}
            setIsLoading={setIsLoading}
          />
        </ul>

        <CommonModalBtn />
        <SNSBtn
          twURL={"https://mem-kage.github.io/kiyarameruchan/"}
          title={"きやらめるちゃんで遊ぶメル！！占い、ポーズあるめるよ！"}
        />
      </div>
    </>
  );
};

const KiyarameruChan = styled.img`
  max-width: 300px;
  /* animation: mocchiri 3s infinite;
  @keyframes mocchiri {
    0% {
        transform: scale(1, 0.8);
    }
    20% {
        transform: scale(0.8, 1.1);
    }
    95% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(1, 0.8);
    }
  } */
`;

const ImgBox = styled.div`
  width: 90%;
  margin: 20px auto;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 750px) {
    margin: calc(0.6875rem + ((1vw - 3.75px) * 2.9333)) 0;
    font-size: calc(0.875rem + ((1vw - 3.75px) * 3.7333));
  }
`;

export default ShindanResult;
