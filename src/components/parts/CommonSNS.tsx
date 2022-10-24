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
  const sendMsg = title + " きやらめるちゃん：" + twURL;
  const encodeTitle = encodeURI(sendMsg);
  const sendURL = `https://line.me/R/share?text=${encodeTitle}`;

  return(
    <div className="common-sns">
      <TwitterShareButton
        url={twURL}
        title={title}
      >
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      {/* <LineShareButton url={twURL} title={title} >
        <LineIcon size={40} round />
      </LineShareButton> */}
      <a target="_blank" href={sendURL} rel="noreferrer">ラインで送る</a>

    </div>
  )
}

export default CommonSNS;
