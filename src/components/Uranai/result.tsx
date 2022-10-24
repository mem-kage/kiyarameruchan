import React from "react";
import styled from "styled-components";
import UranaiBtn from "../parts/CommonBtn";
import UranaiTxtBtn from "../parts/CommonTxtBtn";
import UranaiTopBtn from "../parts/CommonTopBtn";
import CommonModalBtn from "../parts/CommonModal";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import SNSBtn from '../parts/CommonSNS';

interface Props {
  uranaiFlg: boolean;
  setUranaiFlg: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedNumber: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const UranaiResult: React.VFC<Props> = ({uranaiFlg, setUranaiFlg, setIsLoading, selectedNumber, setValue}) => {
  const result = [
    {
      "item": {
        "result": "マジでやばい！！",
        "resultTxt": "最近で一番イケてる日める♪ありのままが素敵めるよ！ただ、いいことが起こりすぎて周りから嫉妬されるかも...?"
      }
    },
    {
      "item": {
        "result": "絶好調フィーバー:ピカピカ:",
        "resultTxt": "仕事も勉強も大きく前進するめる！自信もっていいめる！"
      }
    },
    {
      "item": {
        "result": "絶好調！！",
        "resultTxt": "過去の失敗が役に立つめる！失敗なんてこの世にはないめるよ！"
      }
    },
    {
      "item": {
        "result": "好調",
        "resultTxt": "周りから力を貸してもらいながら成功に一歩ずつ近づいていってるめる。いつもお疲れ様める。"
      }
    },
    {
      "item": {
        "result": "普通",
        "resultTxt": "肩の力を抜いて自然体でいることが幸運への近道めるよ！"
      }
    },
    {
      "item": {
        "result": "不調",
        "resultTxt": "周りの意見に振り回されがちかも!?自分の意見も大切にするめる！"
      }
    },
    {
      "item": {
        "result": "絶不調",
        "resultTxt": "視線が気になり意気消沈...。たまには一人になって気分転換するのもいいめるよ♪"
      }
    }
  ]

  return (
    <Container className="uranai-result-wrapper">
      <div className="uranai-result">
        <p>{result[selectedNumber-1].item.result}</p>
        <p>{result[selectedNumber-1].item.resultTxt}</p>
      </div>
      <ul className="flex-items">
        <li>
          <ArrowLeftIcon fontSize="medium" />
          <UranaiTopBtn
            btnTxt={"Topに戻る"}
            setIsLoading={setIsLoading}
            setValue={setValue}
          />
        </li>
        <UranaiTxtBtn
          status={uranaiFlg}
          setStatus={setUranaiFlg}
          btnTxt={"もう一度"}
          setIsLoading={setIsLoading}
        />
      </ul>

      <CommonModalBtn />
      <SNSBtn
        twURL={"https://mem-kage.github.io/kiyarameruchan/"}
        title={`占い結果は「${result[selectedNumber-1].item.result}」！${result[selectedNumber-1].item.resultTxt}`}
      />
    </Container>
  );
};

const Container = styled.div`
  background: url(${process.env.PUBLIC_URL}/images/uranai/kc_uranai_result.svg) center center / contain no-repeat;
  height: 80vh;
  position: relative;
`;

export default UranaiResult;
