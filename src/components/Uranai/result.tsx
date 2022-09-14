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
  const result = [
    {
      "item": {
        "result": "マジでやばい！！",
        "resultTxt": "いいことが起こりすぎて周りから嫉妬されるかも...?"
      }
    },
    {
      "item": {
        "result": "マジでやばい！！",
        "resultTxt": "いいことが起こりすぎて周りから嫉妬されるかも...?"
      }
    },
    {
      "item": {
        "result": "マジでやばい！！",
        "resultTxt": "いいことが起こりすぎて周りから嫉妬されるかも...?"
      }
    },
    {
      "item": {
        "result": "マジでやばい！！",
        "resultTxt": "いいことが起こりすぎて周りから嫉妬されるかも...?"
      }
    },
    {
      "item": {
        "result": "マジでやばい！！",
        "resultTxt": "いいことが起こりすぎて周りから嫉妬されるかも...?"
      }
    },
    {
      "item": {
        "result": "マジでやばい！！",
        "resultTxt": "いいことが起こりすぎて周りから嫉妬されるかも...?"
      }
    },
    {
      "item": {
        "result": "マジでやばい！！",
        "resultTxt": "いいことが起こりすぎて周りから嫉妬されるかも...?"
      }
    }
  ]
  console.log(result[0].item.result)

  return (
    <div className="uranai-result-wrapper">
      <h3>占い後</h3>
      <p>{result[selectedNumber-1].item.result}</p>
      <UranaiBtn
        status={uranaiFlg}
        setStatus={setUranaiFlg}
        btnTxt={"もう一度占うめる"}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default UranaiResult;
