import React from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon
} from "react-share";

interface Props {
  twURL: string;
  title: string;
}

const CommonSNS: React.VFC<Props> = ({twURL, title}: Props) => {

  return(
    <div className="common-sns">
      <TwitterShareButton
        url={twURL}
        title={title}
      >
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <LineShareButton url={twURL} title={title} >
        <LineIcon size={40} round />
      </LineShareButton>
      <a target="_blank" href="https://line.me/R/share?text=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF" rel="noreferrer">ラインで送る</a>

    </div>
  )
}

export default CommonSNS;
